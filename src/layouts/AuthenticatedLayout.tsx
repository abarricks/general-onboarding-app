import { Outlet, Navigate, useLocation } from 'react-router-dom';

import { useInsight } from '@semoss/sdk-react';
import { useEffect } from 'react';
import { LoginDetails, SystemConfig } from '../types/auth';
import { useStore } from '../contexts/StoreContext'

/**
 * Wrap the database routes and add additional funcitonality
 */
export const AuthenticatedLayout = () => {
    const { isAuthorized, system } = useInsight();

    const { taskStore } = useStore();
    const location = useLocation(); // track the location

    // console.log("User Data: ", system?.config?.loginDetails);
     /*
    User Data:  
        {Ms: {…}}
        Ms
        : 
        {name: 'last, first', id: '#'}
        [[Prototype]]
        : 
        Object
    */


    // UNCOMMENT FOR STATE STORAGE
    useEffect(() => {
        const loginDetails = system?.config?.loginDetails as LoginDetails;
        if (loginDetails?.Ms?.id) {
            taskStore.setCurrentUser(loginDetails?.Ms?.id);
        }
    }, [system?.config?.loginsDetails]);

    // if security is enabled, we need logins
    if (!isAuthorized) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
};
