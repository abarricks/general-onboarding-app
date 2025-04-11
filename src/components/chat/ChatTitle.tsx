import { observer } from 'mobx-react-lite';
import { Stack, Icon, Typography } from '@mui/material';

import { SportsEsports } from '@mui/icons-material';
import React from 'react';

export const ChatTitle = observer(() => {
    return (
        <Stack direction={'row'} alignItems={'center'} spacing={1}>
            {/* <Icon>
                <SportsEsports />
            </Icon> */}
            <Typography component={'h6'}>
                Chat History
            </Typography>
        </Stack>
    );
});
