
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import AuthenticationContext from '../../contexts/authentication-context';
import { LocalStorageKey } from '../../util/local-storage';
import { Map } from '../map/map';

export const HomePage: React.FC = () => {
    const authenticationContext = useContext(AuthenticationContext);
    const history = useHistory();

    useEffect(() => {
        if (localStorage.getItem(LocalStorageKey.ACCESS_TOKEN) == null) {
            history.push('/login');
        }
    }, []);

    return (
        <div>
            
        </div>
    )
}
