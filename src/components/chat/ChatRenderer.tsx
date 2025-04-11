import { observer } from 'mobx-react-lite';
import {
    styled,
    Stack,
    Container,
    Avatar,
    Typography,
    IconButton,
    ButtonGroup,
    Tooltip,
    Skeleton,
} from '@mui/material';
import {
    Lightbulb,
    Person,
    ThumbDownAltOutlined,
    ThumbUpAltOutlined,
} from '@mui/icons-material';

import { useChat } from '../../hooks';
import { Markdown } from '../common';
import { ChatMessage } from '../../stores/chat';
import React from 'react';

const StyledMessage = styled('div', {
    shouldForwardProp: (prop) => prop !== 'agent',
})<{
    /** Track if the message is an agent */
    agent: boolean;
}>(({ theme, agent }) => ({
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    backgroundColor: agent ? theme.palette.background.paper : 'transparent',
    '&:hover #chat-messages--action': {
        visibility: 'visible',
    },
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    marginTop: -theme.spacing(0.75),
    width: 32,
    height: 32,
}));

const StyledContent = styled('div')(() => ({
    flex: '1',
    overflow: 'hidden',
}));

const StyledActionContainer = styled('div')(({ theme }) => ({
    visibility: 'hidden',
    color: theme.palette.text.disabled,
    width: theme.spacing(7),
}));

interface ChatRenderer {
    /** Message to render */
    message: ChatMessage;
}

export const ChatRenderer = observer((props: ChatRenderer) => {
    const { message } = props;

    const { chat } = useChat();

    const isAgent = message.input === 'agent';

    return (
        <StyledMessage agent={isAgent}>
            <Container maxWidth="md">
                <Stack direction={'row'} spacing={3} overflow={'hidden'}>
                    <StyledAvatar alt="message icon">
                        {isAgent ? <Lightbulb /> : <Person />}
                    </StyledAvatar>
                    <StyledContent>
                        {isAgent ? (
                            <>
                                {message.content ? (
                                    <Markdown>{message.content}</Markdown>
                                ) : (
                                    <Stack
                                        direction={'row'}
                                        spacing={1}
                                        height={(theme) => theme.spacing(4)}
                                        alignItems={'center'}
                                    >
                                        <Skeleton
                                            variant="circular"
                                            width={12}
                                            height={12}
                                        />
                                        <Skeleton
                                            variant="circular"
                                            width={12}
                                            height={12}
                                        />
                                        <Skeleton
                                            variant="circular"
                                            width={12}
                                            height={12}
                                        />
                                    </Stack>
                                )}
                            </>
                        ) : (
                            <Typography variant="body1">
                                {message.content}
                            </Typography>
                        )}
                    </StyledContent>
                    <StyledActionContainer id="chat-messages--action">
                        {isAgent ? (
                            <ButtonGroup>
                                <Tooltip
                                    title="Record negative response"
                                    placement="top"
                                >
                                    <IconButton
                                        size="small"
                                        color="inherit"
                                        onClick={() =>
                                            chat.activeRoom.recordFeedback(
                                                message.messageId,
                                                false,
                                            )
                                        }
                                    >
                                        <ThumbDownAltOutlined
                                            color="inherit"
                                            fontSize="inherit"
                                        />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip
                                    title="Record positive response"
                                    placement="top"
                                >
                                    <IconButton
                                        size="small"
                                        color="inherit"
                                        onClick={() =>
                                            chat.activeRoom.recordFeedback(
                                                message.messageId,
                                                true,
                                            )
                                        }
                                    >
                                        <ThumbUpAltOutlined
                                            color="inherit"
                                            fontSize="inherit"
                                        />
                                    </IconButton>
                                </Tooltip>
                            </ButtonGroup>
                        ) : (
                            <>&nbsp;</>
                        )}
                    </StyledActionContainer>
                </Stack>
            </Container>
        </StyledMessage>
    );
});
