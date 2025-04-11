import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import {
    styled,
    Container,
    Paper,
    IconButton,
    InputBase,
    Tooltip,
    Typography,
    LinearProgress,
    Popover,
    TextField,
    Slider,
} from '@mui/material';
import { Send, Clear, Mic, Settings } from '@mui/icons-material';

import { useChat } from '../../hooks';
import { TEMPERATURE, TOKEN_LENGTH, ChatRoom } from '../../stores/chat';
import React from 'react';

const StyledFooter = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: theme.spacing(5),
    overflow: 'hidden',
    paddingTop: theme.spacing(2),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    paddingRight: theme.spacing(3),
    overflow: 'hidden',
}));

const StyledInput = styled(InputBase)(({ theme }) => ({
    flex: 1,
    fontSize: theme.typography.fontSize,
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
}));

const StyledLoading = styled(LinearProgress)(() => ({
    position: 'absolute',
    bottom: '0',
    width: '100%',
}));

const StyledMessage = styled(Typography)(({ theme }) => ({
    position: 'absolute',
    color: theme.palette.text.disabled,
    fontSize: '10px',
    padding: theme.spacing(0.5),
}));

const StyledPopoverContent = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(2),
}));

// For Speech Recognition API
let speech;
if ('webkitSpeechRecognition' in window) {
    const SpeechRecognition = window.webkitSpeechRecognition;
    speech = new SpeechRecognition();
    speech.continuous = true;
} else {
    speech = null;
}

export const ChatFooter = observer(() => {
    const { chat } = useChat();

    const [input, setInput] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [settingsAnchorEle, setSettingsAnchorEle] =
        useState<HTMLButtonElement | null>(null);
    const [settings, setSettings] = useState<
        Pick<ChatRoom['options'], 'prompt' | 'temperature' | 'tokenLength'>
    >({
        prompt: '',
        temperature: TEMPERATURE,
        tokenLength: TOKEN_LENGTH,
    });

    // it's loading if something is running
    const isLoading = chat.activeRoom && chat.activeRoom.isLoading;

    // it will be disabled if there no model, no input or it is loading
    const isDisabled =
        isLoading ||
        (chat.activeRoom &&
            !chat.activeRoom.isInitialized &&
            !chat.models.selected) ||
        !input;

    let buttonTooltip = '';
    if (isLoading) {
        buttonTooltip = 'Please wait';
    } else if (
        chat.activeRoom &&
        !chat.activeRoom.isInitialized &&
        !chat.models.selected
    ) {
        buttonTooltip = 'Please select a model';
    } else if (!input) {
        buttonTooltip = 'Please enter input';
    } else if (!isDisabled) {
        buttonTooltip = 'Ask model';
    }

    // update the settings when the active room changes
    useEffect(() => {
        if (!chat.activeRoom) {
            setSettings({
                prompt: '',
                temperature: TEMPERATURE,
                tokenLength: TOKEN_LENGTH,
            });
            return;
        }

        // set the settings
        const options = chat.activeRoom.options;

        setSettings({
            prompt: options.prompt,
            tokenLength: options.tokenLength,
            temperature: options.temperature,
        });
    }, [chat.activeRoom ? chat.activeRoom.options : null]);

    /**
     * Trigger a change
     *
     * @param input - input to ask the model
     */
    const askModel = async (input: string) => {
        // check if there is something to ask
        if (
            isLoading ||
            (chat.activeRoom &&
                !chat.activeRoom.isInitialized &&
                !chat.models.selected) ||
            !input
        ) {
            return;
        }

        // get the room id
        let roomId = '';
        if (chat.activeRoom) {
            roomId = chat.activeRoom.roomId;
        } else {
            roomId = await chat.openRoom();
        }

        if (!roomId) {
            return;
        }

        // get the room
        const room = chat.getRoom(roomId);

        // initialize the room with an empty context if it isn't
        if (!room.isInitialized) {
            // initialize the room
            await room.initialize(chat.models.selected);
        }

        // set the settings
        room.setOptions(settings);

        // ask the model
        room.askModel(input);

        // clear the input
        setInput('');
    };

    /**
     * Open the popover
     * @param event - mouse event
     */
    const openSettings = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSettingsAnchorEle(event.currentTarget);
    };

    /**
     * Close the popover
     * @param event - mouse event
     */
    const closeSettings = () => {
        setSettingsAnchorEle(null);
    };

    /**
     * Update the settings
     *
     * updated - updated settings
     */
    const updateSettings = (updated: Partial<typeof settings>) => {
        // merge the old with the new
        const merged = {
            ...settings,
            ...updated,
        };

        // set the options
        setSettings(merged);

        // update the active room if possible
        if (chat.activeRoom) {
            chat.activeRoom.setOptions(merged);
        }
    };

    /**
     * Voice Recognition
     */
    useEffect(() => {
        speech.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setInput(transcript);
            setIsRecording(false);
        };
        speech.onerror = (event) => {
            console.error('Speech recognition error occurred: ' + event.error);
            setIsRecording(false); // Turn Listening Off
        };

        return () => {
            console.warn('Cleaning up speech recognition');
            speech.stop();
            setIsRecording(false);
        };
    }, []);

    return (
        <StyledFooter>
            <Container maxWidth="md">
                <StyledPaper elevation={2}>
                    <StyledInput
                        placeholder="Ask"
                        inputProps={{
                            'aria-label': 'Input to send to the model',
                        }}
                        value={input}
                        multiline={true}
                        maxRows={4}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                // stop it from making a new line
                                e.preventDefault();

                                askModel(input);
                            }
                        }}
                    />

                    {input && (
                        <>
                            <Tooltip title="Reset the input" placement="top">
                                <IconButton
                                    size={'small'}
                                    aria-label="Reset the input"
                                    onClick={() => setInput('')}
                                >
                                    <Clear fontSize="inherit"></Clear>
                                </IconButton>
                            </Tooltip>
                        </>
                    )}

                    <Tooltip title={buttonTooltip} placement="top">
                        <span>
                            <IconButton
                                size={'small'}
                                type="button"
                                aria-label="Ask the Model"
                                disabled={isDisabled}
                                onClick={() => {
                                    // asked the rendered version
                                    askModel(input);
                                }}
                            >
                                <Send fontSize="inherit" />
                            </IconButton>
                        </span>
                    </Tooltip>

                    {!input ? (
                        <Tooltip title="Click to Listen" placement="top">
                            <span>
                                <IconButton
                                    size={'small'}
                                    type="button"
                                    aria-label="Ask the Model"
                                    color={isRecording ? 'error' : 'default'}
                                    disabled={isLoading || !speech}
                                    onClick={() => {
                                        if (!isRecording) {
                                            setIsRecording(true);
                                            speech.start();
                                        }
                                    }}
                                >
                                    <Mic fontSize="inherit" />
                                </IconButton>
                            </span>
                        </Tooltip>
                    ) : (
                        <></>
                    )}

                    <Tooltip title="Open Chat Settings" placement="top">
                        <span>
                            <IconButton
                                aria-describedby={'chat-footer--settings'}
                                size={'small'}
                                type="button"
                                aria-label="Open Chat Settings"
                                disabled={isLoading}
                                onClick={(e) => {
                                    openSettings(e);
                                }}
                            >
                                <Settings fontSize="inherit" />
                            </IconButton>
                        </span>
                    </Tooltip>

                    <Popover
                        id={'chat-footer--settings'}
                        open={!!settingsAnchorEle}
                        anchorEl={settingsAnchorEle}
                        onClose={() => closeSettings()}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                    >
                        <StyledPopoverContent>
                            <Typography variant="subtitle2" mb={1}>
                                Token Length
                            </Typography>
                            <TextField
                                aria-label="Token Length"
                                type="number"
                                value={settings.tokenLength}
                                onChange={(e) =>
                                    updateSettings({
                                        tokenLength:
                                            Number(e.target.value) || 0,
                                    })
                                }
                                inputProps={{
                                    min: 0,
                                }}
                                size="small"
                                variant={'standard'}
                            />
                            <Typography variant="subtitle2" my={1}>
                                Temperature
                            </Typography>
                            <Slider
                                aria-label="Temperature"
                                value={settings.temperature}
                                onChange={(e, val) =>
                                    updateSettings({
                                        temperature: val as number,
                                    })
                                }
                                size="small"
                                valueLabelDisplay="auto"
                                min={0}
                                max={1}
                                step={0.01}
                            />
                        </StyledPopoverContent>
                    </Popover>

                    {isLoading && <StyledLoading />}
                </StyledPaper>
                <StyledMessage variant={'caption'}>
                    Press Enter To Ask
                </StyledMessage>
            </Container>
        </StyledFooter>
    );
});
