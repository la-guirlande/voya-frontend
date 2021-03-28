
import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import AuthenticationContext from '../../contexts/authentication-context';
import { Button } from '../button';
import { Map } from '../map/map';

export const HomePage: React.FC = () => {
    const authenticationContext = useContext(AuthenticationContext);

    return (
        <div>
            {authenticationContext.authUser && <Map journey={authenticationContext.authUser?.journeys[0]} />}
            {console.log(authenticationContext.authUser?.journeys)}
        </div>
    )
}
