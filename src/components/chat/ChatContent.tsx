import { observer } from 'mobx-react-lite';
import { styled, Paper, CircularProgress, Backdrop } from '@mui/material';

import { useChat } from '../../hooks';

import { ChatNavigation } from './ChatNavigation';
import { ChatHeader } from './ChatHeader';
import { ChatRenderer } from './ChatRenderer';
import { ChatFooter } from './ChatFooter';
import { ChatSplash } from './ChatSplash';
import React from 'react';

const StyledPaper = styled(Paper)(() => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    height: '100%',
    width: '100%',
}));

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.primary.contrastText,
}));

const StyledContent = styled('div')(() => ({
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    position: 'relative',
    height: '100%',
    overflowY: 'auto',
    overflow: 'hidden',
}));

const StyledScroll = styled('div')(() => ({
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    overflowX: 'hidden',
    overflowY: 'auto',
    direction: 'rtl',
    transform: 'rotate(180deg)',
}));

const StyledScrollInner = styled('div')(() => ({
    direction: 'ltr',
    transform: 'rotate(180deg)',
}));

const StyledFooter = styled('div')(() => ({
    flexShrink: '0',
}));

export const ChatContent = observer(() => {
    const { chat } = useChat();

    return (
        <StyledPaper>
            <StyledBackdrop open={!chat.isInitialized || chat.isLoading}>
                <CircularProgress color="inherit" />
            </StyledBackdrop>
            <ChatNavigation>
                <StyledContent>
                    {chat.activeRoom && chat.activeRoom.isInitialized ? (
                        <>
                            <ChatHeader />
                            <StyledScroll>
                                <StyledScrollInner>
                                    {chat.activeRoom.log.map((m, mIdx) => {
                                        return (
                                            <ChatRenderer
                                                key={mIdx}
                                                message={m}
                                            />
                                        );
                                    })}
                                </StyledScrollInner>
                            </StyledScroll>
                        </>
                    ) : (
                        <ChatSplash />
                    )}
                </StyledContent>
                <StyledFooter>
                    <ChatFooter />
                </StyledFooter>
            </ChatNavigation>
        </StyledPaper>
    );
});
