import { observer } from 'mobx-react-lite';
import {
    styled,
    Paper,
    Button,
    Stack,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    ThemeProvider,
    createTheme,
    IconButton,
    Tooltip,
    CircularProgress,
    Backdrop,
    useTheme,
    useMediaQuery,
} from '@mui/material';
import {
    ChatBubbleOutlineOutlined,
    Close,
    Menu as MenuIcon,
} from '@mui/icons-material';

// import { darkTheme } from '../common/Theme';
import { useChat } from '../../hooks';
import { useState } from 'react';

import { ChatTitle } from './ChatTitle';
import React from 'react';
import { lightTheme } from '@/theme';

const MOBILE_HEIGHT = '56px';

// const StyledMobileNav = styled(Paper)(() => ({
//     position: 'absolute',
//     top: '0',
//     left: '0',
//     right: '0',
//     zIndex: theme.zIndex.drawer + 3,
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     height: MOBILE_HEIGHT,
//     width: '100%%',
//     borderRadius: '0',
//     padding: theme.spacing(2),
//     gap: theme.spacing(2),
// }));

const StyledMobileNav = styled(Paper)(() => ({
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    zIndex: theme.zIndex.drawer + 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: MOBILE_HEIGHT,
    width: '100%%',
    borderRadius: '0',
    padding: theme.spacing(2),
    gap: theme.spacing(2),
}));

const StyledSidebar = styled(Paper, {
    shouldForwardProp: (prop) => prop !== 'open',
})<{
    /** Track if the sidebar is open */
    open: boolean;
}>(({ open }) => ({
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    width: '280px',
    borderRadius: '0',
    padding: theme.spacing(2),
    gap: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
        position: 'absolute',
        zIndex: open ? theme.zIndex.drawer + 2 : -1,
        width: '100%',
        maxWidth: '280px',
    },
}));

const StyledSidebarHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    overflow: 'auto',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
}));

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
    position: 'absolute',
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.primary.contrastText,
}));

const StyledContent = styled('div')(({ theme }) => ({
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    height: '100%',
    width: '100%',
    backgroundColor: theme.palette.grey[50],
    overflow: 'hidden',
    [theme.breakpoints.down('md')]: {
        paddingTop: MOBILE_HEIGHT,
    },
}));

const StyledBottom = styled('div')(() => ({
    flex: '1',
    width: '100%',
    overflow: 'auto',
}));

const StyledListItemButton = styled(ListItemButton)(({ theme, selected }) => ({
    gap: theme.spacing(1.5),
    color: selected ? theme.palette.primary.light : '',
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
}));

const StyledListItemIcon = styled(ListItemIcon)(() => ({
    color: 'inherit',
    minWidth: 'auto',
}));

const StyledCloseButton = styled(IconButton)(() => ({
    color: 'inherit',
}));

// const theme = createTheme(darkTheme);
const theme = createTheme(lightTheme);

interface ChatNavigationProps {
    children: React.ReactNode;
}

export const ChatNavigation = observer((props: ChatNavigationProps) => {
    const { children } = props;

    const { chat } = useChat();
    const [isOpen, setIsOpen] = useState(false);

    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Stack
            flex={1}
            direction={'row'}
            sx={{ position: 'relative' }}
            overflow={'hidden'}
        >
            <ThemeProvider theme={theme}>
                {matches && (
                    <StyledMobileNav>
                        <ChatTitle />
                        <IconButton onClick={() => setIsOpen(!isOpen)}>
                            <MenuIcon />
                        </IconButton>
                    </StyledMobileNav>
                )}
                <StyledSidebar
                    open={isOpen}
                    variant={'elevation'}
                    elevation={1}
                >
                    <StyledSidebarHeader>
                        <ChatTitle />
                        <Stack flex={1}>&nbsp;</Stack>
                        <Button
                            variant={'contained'}
                            sx={{backgroundColor: "#222", color: "white", "&:hover": {backgroundColor: "#444"}}}
                            size={'small'}
                            onClick={() => chat.openRoom()}
                        >
                            New Chat
                        </Button>
                    </StyledSidebarHeader>
                    <StyledBottom>
                        <List
                            component="nav"
                            dense={true}
                            aria-label="open chat rooms"
                        >
                            <Stack direction={'column'} spacing={1.5}>
                                {chat.order.map((roomId) => {
                                    // get the room
                                    const room = chat.getRoom(roomId);

                                    let name = '';

                                    if (room.metadata && room.metadata.name) {
                                        name = room.metadata.name;
                                    }

                                    if (!name) {
                                        for (const m of room.log) {
                                            if (m.input === 'user') {
                                                name = m.content;
                                                break;
                                            }
                                        }
                                    }

                                    if (!name) {
                                        name = 'New Chat';
                                    }

                                    return (
                                        <StyledListItemButton
                                            key={roomId}
                                            selected={
                                                chat.activeRoomId === roomId
                                            }
                                            onClick={() =>
                                                chat.selectRoom(roomId)
                                            }
                                        >
                                            <StyledListItemIcon>
                                                <ChatBubbleOutlineOutlined fontSize="inherit" />
                                            </StyledListItemIcon>
                                            <ListItemText
                                                primary={name}
                                                primaryTypographyProps={{
                                                    variant: 'subtitle2',
                                                    noWrap: true,
                                                }}
                                            />
                                            {room.isLoading && (
                                                <>
                                                    <ListItemIcon
                                                        sx={{
                                                            color: 'inherit',
                                                            minWidth: 'auto',
                                                        }}
                                                    >
                                                        <CircularProgress
                                                            color={'inherit'}
                                                            size={'20px'}
                                                        ></CircularProgress>
                                                    </ListItemIcon>
                                                </>
                                            )}
                                            <Tooltip
                                                title="Close the room"
                                                placement="right"
                                            >
                                                <StyledCloseButton
                                                    edge="end"
                                                    aria-label="delete"
                                                    size={'small'}
                                                    onClick={(e) => {
                                                        // don't propagate
                                                        e.stopPropagation();

                                                        // close it
                                                        chat.closeRoom(roomId);
                                                    }}
                                                >
                                                    <Close fontSize="inherit" />
                                                </StyledCloseButton>
                                            </Tooltip>
                                        </StyledListItemButton>
                                    );
                                })}
                            </Stack>
                        </List>
                    </StyledBottom>
                </StyledSidebar>
            </ThemeProvider>
            <StyledBackdrop open={isOpen} onClick={() => setIsOpen(false)} />
            <StyledContent>{children}</StyledContent>
        </Stack>
    );
});
