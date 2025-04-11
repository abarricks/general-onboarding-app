import { styled, Stack, Paper } from '@mui/material';

import { Chat } from '@/components/chat';
import { Policy } from '@mui/icons-material';

const StyledContainer = styled('div')(({ theme }) => ({
    width: '100%',
    height: `calc(100vh - ${theme.spacing(6)})`,
    marginTop: '-10px',
    paddingBottom: `${theme.spacing(2)}`,
}));

const StyledPaper = styled(Paper)(() => ({
    height: '100%',
    width: '100%',
}));

export const OnboardingAssistantPage = () => {
    return (
        <Stack alignItems={'center'} justifyContent={'center'}>
            <StyledContainer>
                <StyledPaper variant={'elevation'} elevation={2} square>
                    <Chat />
                </StyledPaper>
            </StyledContainer>
        </Stack>
    );
};

export default OnboardingAssistantPage;