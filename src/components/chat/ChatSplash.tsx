import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import {
    styled,
    Paper,
    Box,
    Stack,
    Container,
    Typography,
    TextField,
    MenuItem,
    Tooltip,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Avatar,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

import { useChat } from '../../hooks';
import { INSTRUCTIONS, Instructions } from '../../stores/chat';
import React from 'react';
import { ChatFooter } from './ChatFooter';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';

const StyledContainer = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingTop: theme.spacing(1),
    backgroundColor: 'transparent',
    [theme.breakpoints.down('md')]: {
        paddingTop: theme.spacing(5),
    },
}));

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

const StyledSectionTitle = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
}));

const StyledContext = styled(Button)(({ theme }) => ({
    width: '100%',
    justifyContent: 'flex-start',
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(3),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.background.paper,
    textAlign: 'left',
}));

const StyledContextText = styled('span', {
    shouldForwardProp: (prop) => prop !== 'custom',
})<{
    /** Track if it is the custom context */
    custom: boolean;
}>(({ theme, custom }) => ({
    ...theme.typography.body2,
    // two lineheight
    height: `${2 * 1.43 * 14}px`,
    color: custom
        ? theme.typography.caption.color
        : theme.typography.body2.color,
    lineHeight: custom ? 2 * 1.43 : 1.43,
    fontStyle: custom ? 'italic' : undefined,
    margin: custom ? 'auto' : undefined,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
}));

export const ChatSplash = observer(() => {
    const { chat } = useChat();

    // custom
    const [isCustomOpen, setCustomOpen] = useState(false);
    const [customContext, setCustomContext] = useState('');

    /**
     * Set the context of a room
     *
     * @param context - context to load
     */
    const setRoomTemplate = async (context: Instructions['context']) => {
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
            await room.initialize(chat.models.selected, {
                context: context,
            });
        }
    };

    /**
     * Close the Custom Dialog
     * @param save - save the new results
     */
    const closeCustomDialog = async (save: boolean) => {
        // reset the text
        if (!save) {
            setCustomContext('');
        } else {
            // wait for this to be complete
            await setRoomTemplate(customContext);
        }

        // close it
        setCustomOpen(false);
    };
    

    const EXAMPLE_QUESTIONS = [
        { id: 1, question: "Tell me about the Defense Health Agency (DHA)." },
        { id: 2, question: "What is a CAC? How long does a CAC Request take?" },
        { id: 3, question: "How can I gain access to DDHQ?" },
        { id: 4, question: "What is GovConnect.ai?" }
    ];

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
            <StyledContainer>
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
                                {/* <Typography
                                    variant="body2"
                                    sx={{ color: 'rgba(0, 0, 0, 0)' }}
                                >
                                    Onboarding Bot
                                </Typography> */}
                            </div>
                        </Stack>
                        
                        <div>
                        <StyledAction elevation={1}>
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
                        </div>
                    </StyledTitle>
                    <StyledDescription variant="body1">
                        Here to help answer your questions about the onboarding process. Information from the following onboarding documents were used to train this model: BPASS Business Processes (PPT), How to request a CAC card (DOC), ESA-BAD Onboarding-Offboarding Processes (PPT), Deloitte MITO & ESA-BAD Onboarding (PPT), and SEMOSS and GovConnect.ai trainings (PPTs).
                    </StyledDescription>
                </StyledPaper> 
                    {/* <Stack
                        direction={'row'}
                        alignItems={'center'}
                        justifyContent={'space-between'}
                        flexWrap={'wrap'}
                    >
                        <Box>
                            <Typography variant="h6">Welcome to the B-PASS Onboarding Assistant</Typography>
                            <Typography variant="body1">Here to help answer your onboarding questions.</Typography>
                        </Box>
                        

                        
                        <StyledAction elevation={1}>
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

                    {/* <StyledSectionTitle variant="subtitle2">
                        Example Questions
                    </StyledSectionTitle>
                    <Box>
                        <Grid container spacing={2}>
                            <Grid xs={12} sm={12} md={4} lg={3}>
                            <Tooltip title={'Click to ask sample question'} children={undefined}>
                                <span>
                                    <StyledContext
                                        disabled={!chat.models.selected}
                                        onClick={() => }
                                    
                                    >

                                    </StyledContext>
                                </span>
                            
                            </Tooltip>

                            </Grid>
                        </Grid> 
                    </Box> */}



                    {/* <Box>
                        <Grid container spacing={2}>
                            <Grid xs={12} sm={12} md={4} lg={3}>
                                <Tooltip
                                    title={
                                        'Provide custom instructions to the chat'
                                    }
                                >
                                    <span>
                                        <StyledContext
                                            disabled={!chat.models.selected}
                                            onClick={() => setCustomOpen(true)}
                                        >
                                            <StyledContextText custom={true}>
                                                Custom
                                            </StyledContextText>
                                        </StyledContext>
                                    </span>
                                </Tooltip>
                            </Grid>
                            {INSTRUCTIONS.map((i) => {
                                return (
                                    <Grid
                                        key={i.id}
                                        xs={12}
                                        sm={12}
                                        md={4}
                                        lg={3}
                                    >
                                        <Tooltip title={i.description}>
                                            <span>
                                                <StyledContext
                                                    disabled={
                                                        !chat.models.selected
                                                    }
                                                    onClick={() => {
                                                        setRoomTemplate(
                                                            i.context,
                                                        );
                                                    }}
                                                >
                                                    <StyledContextText
                                                        custom={false}
                                                    >
                                                        {i.description}
                                                    </StyledContextText>
                                                </StyledContext>
                                            </span>
                                        </Tooltip>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Box> */}
                </Container>
            </StyledContainer>
            <Dialog
                open={isCustomOpen}
                onClose={() => closeCustomDialog(false)}
                fullWidth
            >
                <DialogTitle>Custom Instructions</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        label="Context"
                        type="text"
                        fullWidth
                        multiline
                        rows={4}
                        margin="normal"
                        value={customContext}
                        onChange={(e) => setCustomContext(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button
                        onClick={() => closeCustomDialog(false)}
                        variant={'text'}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => closeCustomDialog(true)}
                        variant="contained"
                    >
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
});
