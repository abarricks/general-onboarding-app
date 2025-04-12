import { useState, useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import {
    styled,
    ButtonGroup,
    IconButton,
    Container,
    Avatar,
    Paper,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Tooltip,
    TextField,
    Typography,
    MenuItem,
    Stack,
} from '@mui/material';
import { Lightbulb, EditOutlined } from '@mui/icons-material';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';

import { useChat } from '@/hooks';

{/*REUSED - whoopsie*/}
const StyledAction = styled(Paper)(({ theme }) => ({
    display: 'inline-flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: theme.spacing(2),
    overflow: 'hidden',
    gap: theme.spacing(2),
}));

const StyledActionSelect = styled(TextField)(() => ({
    width: '200px',
}));
{/*REUSED - whoopsie*/}

const StyledMessage = styled('div')(({ theme }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingTop: theme.spacing(1),
    // paddingBottom: theme.spacing(3),
    // backgroundColor: theme.palette.background.paper,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    marginTop: -theme.spacing(0.75),
    width: 32,
    height: 32,
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: theme.spacing(2),
    padding: theme.spacing(2),
}));

const StyledContent = styled('div')(({ theme }) => ({
    ...theme.typography.body1,
    flex: '1',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '3',
    WebkitBoxOrient: 'vertical',
}));

const StyledActionContainer = styled('div')(({ theme }) => ({
    color: theme.palette.text.disabled,
    width: theme.spacing(4),
}));

export const ChatHeader = observer(() => {
    const { chat } = useChat();

    const [isOpen, setIsOpen] = useState(false);

    const [context, setContext] = useState('');

    /**
     * Sync the context with the stored one
     */
    const syncContext = () => {
        const context = chat.activeRoom.options.context;

        // set the settings based on the room
        setContext(context);
    };

    /**
     * Close the Dialog
     * @param save - save the new results
     */
    const closeDialog = (save: boolean) => {
        // reset the settings
        if (!save) {
            syncContext();
        } else {
            // set it as an option
            chat.activeRoom.setOptions({
                context: context,
            });
        }

        // close it
        setIsOpen(false);
    };

    // update the settings when it changes
    useEffect(() => {
        // sync it
        syncContext();
    }, [chat.activeRoom.options.context]);

    const StyledPaper = styled(Paper)(({ theme }) => ({
        width: '100%',
        borderRadius: theme.spacing(2),
        marginBottom: theme.spacing(2),
    }));

    const StyledTitle = styled('div')(({ theme }) => ({
        // background: '#242a64',
        background: '#222',
        padding: theme.spacing(2),
        borderTopLeftRadius: theme.spacing(2),
        borderTopRightRadius: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: theme.spacing(2),
    }));

    const StyledAvatar = styled(Avatar)(({ theme }) => ({
        background: 'white',
        marginRight: theme.spacing(2),
    }));

    const StyledDescription = styled(Typography)(({ theme }) => ({
        padding: theme.spacing(2),
        fontSize:'14px',
    }));

    return (
        <>
            <StyledMessage>
                <Container maxWidth="md">

                    <StyledPaper variant={'elevation'} elevation={2} square>
                        <StyledTitle>
                            <Stack direction="row" alignItems="center" spacing={2}>
                                <StyledAvatar>
                                    <SmartToyOutlinedIcon
                                        sx={{ color: 'rgba(0, 0, 0, 0.87)' }}
                                    />
                                </StyledAvatar>
                                <div>
                                    <Typography variant="h6" color="white">BPASS Onboarding Assistant </Typography>
                                </div>
                            </Stack>
                        </StyledTitle>
                        <StyledDescription variant="body2">
                            The Onboarding Assistant is here to help answer your questions about the onboarding process. 
                        </StyledDescription>
                    </StyledPaper> 


                    {/* <StyledPaper elevation={1}>
                            <StyledAvatar alt="message icon">
                                <Lightbulb />
                            </StyledAvatar>
                            <Typography variant="h6">How can I assist you today?</Typography>
                    </StyledPaper> */}
                
                    {/* <Stack
                            direction={'row'}
                            alignItems={'center'}
                            justifyContent={'space-between'}
                            flexWrap={'wrap'}
                        >
                            <Typography variant="h6">B-PASS Onboarding Assistant</Typography>
                            {/* <Typography variant="h6">Model: {chat.models.options.find(m => m.app_id===chat.models.selected)?.app_name}</Typography> */}
                            {/* <StyledAction elevation={1}>
                                <Typography variant="subtitle2">Model</Typography>
                                <StyledActionSelect
                                    select
                                    size={'small'}
                                    placeholder="Select Model"
                                    value={chat.models.selected}
                                    onChange={(e) =>
                                        chat.setSelectedModel(e.target.value)
                                    }
                                >
                                    {chat.models.options.map((m) => (
                                        <MenuItem key={m.app_id} value={m.app_id}>
                                            {m.app_name}
                                        </MenuItem>
                                    ))}
                                </StyledActionSelect>
                            </StyledAction> 
                        </Stack> */}


                        {/* <StyledPaper elevation={1}>
                            <StyledAvatar alt="message icon">
                                <Lightbulb />
                            </StyledAvatar>
                            <StyledContent
                                title={
                                    chat.activeRoom.options.context ||
                                    'No Context Provided. Ask anything or add one'
                                }
                            >
                                {chat.activeRoom.options.context ||
                                    'Welcome. Ask me anything.'}
                            </StyledContent> */}
                            {/* <StyledActionContainer>
                                <ButtonGroup>
                                    <Tooltip title="Edit Context">
                                        <IconButton
                                            size="small"
                                            color="inherit"
                                            onClick={() => setIsOpen(true)}
                                        >
                                            <EditOutlined
                                                color="inherit"
                                                fontSize="inherit"
                                            />
                                        </IconButton>
                                    </Tooltip>
                                </ButtonGroup>
                            </StyledActionContainer> */}
                        {/* </StyledPaper> */}
                </Container>
            </StyledMessage>
            <Dialog open={isOpen} onClose={() => closeDialog(false)} fullWidth>
                <DialogTitle>Edit Context</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        label="Context"
                        type="text"
                        fullWidth
                        multiline
                        rows={4}
                        margin="normal"
                        value={context}
                        onChange={(e) => setContext(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => closeDialog(false)} variant={'text'}>
                        Cancel
                    </Button>
                    <Button
                        onClick={() => closeDialog(true)}
                        variant="contained"
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
});
