import { useState, useLayoutEffect } from 'react';
import {
    Router as ReactRouter,
    Routes,
    Route,
    Navigate,
    Outlet,
} from 'react-router-dom';
import { createHashHistory } from 'history';
import { useInsight } from '@semoss/sdk-react';
import { styled, CircularProgress } from '@mui/material';

import MainLayout from '../layouts/MainLayout';
import { AuthenticatedLayout } from '../layouts/AuthenticatedLayout';
import { LoginPage } from './LoginPage';
import { HomePage } from './HomePage';
import { OnboardingAssistantPage } from './OnboardingAssistantPage'
import { Team1Page } from './teams/Team1Page';
import { Team2Page } from './teams/Team2Page';
import { Team3Page } from './teams/Team3Page';
import { Team4Page } from './teams/Team4Page';
import { Team5Page } from './teams/Team5Page'
import SubTaskPage from './tasks/SubTaskPage';



const StyledContainer = styled('div')(() => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    inset: '0',
    height: '100%',
    width: '100%',
}));

export const history = createHashHistory();

export const Router = () => {
    const { isInitialized, error } = useInsight();

    const [state, setState] = useState({
        action: history.action,
        location: history.location,
    });

    useLayoutEffect(() => history.listen(setState), [history]);

    if (!isInitialized) {
        return (
            <StyledContainer>
                <CircularProgress />
            </StyledContainer>
        );
    }

    if (error) {
        return <>Error</>;
    }

    return (
        <ReactRouter
            location={state.location}
            navigationType={state.action}
            navigator={history}
        >
            <Routes>
                <Route element={<MainLayout />}>
                    <Route element={<AuthenticatedLayout />}>
                        <Route path="/" element={<Outlet />}>
                            <Route index element={<HomePage />} />
                            <Route path="OnboardingAssistant" element={<OnboardingAssistantPage />} />

                            {/* Teams Pages */} 
                            <Route path="teams/Team1" element={<Team1Page />} />
                            <Route path="teams/Team2" element={<Team2Page />} />
                            <Route path="teams/Team3" element={<Team3Page />} />
                            <Route path="teams/Team4" element={<Team4Page />} />
                            <Route path="teams/Team5" element={<Team5Page />}/>

                            <Route path="/tasks/:taskId" element={<SubTaskPage />} />
                            
                        </Route>
                    </Route>
                    <Route path="/login" element={<LoginPage />}></Route>
                    <Route
                        path="*"
                        element={<Navigate to="/login" replace />}
                    />
                </Route>
            </Routes>
        </ReactRouter>
    );
};
