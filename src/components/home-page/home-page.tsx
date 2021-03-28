
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import AuthenticationContext from '../../contexts/authentication-context';
import { Button } from '../button';

export const HomePage: React.FC = () => {
    const authenticationContext = useContext(AuthenticationContext);
    const historiqueInternetMDR = useHistory();
    
    useEffect(() => {
        if (!authenticationContext.authUser) {
            historiqueInternetMDR.push('/login');
        }
    }, [authenticationContext.authUser]);

    return (
        <>
            eeeeeeeeeeeee
        </>
    )
}

