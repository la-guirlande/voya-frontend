import React, { useEffect, useState } from 'react';
import AuthenticationContext from '../../contexts/authentication-context';
import useFetch from '../../hooks/fetch-hook';
import { Config } from '../../util/config';
import { LocalStorageKey } from '../../util/local-storage';
import { UserData } from '../../util/types/data-types';
import { UserInfoResponse } from '../../util/types/response-types';

const AuthenticationProvider: React.FC = (props) => {
    const [authUser, setAuthUser] = useState<UserData>(null);
    const [userInfoQueryState, userInfoQuery] = useFetch<UserInfoResponse>(`${Config.API_URL}/users/info`);

    useEffect(() => {
        if (!userInfoQueryState.fetched) {
            const accessToken = localStorage.getItem(LocalStorageKey.ACCESS_TOKEN);
            if (accessToken != null) {
                userInfoQuery.get();
            }
        } else {
            if (userInfoQueryState.data != null) {
                setAuthUser(userInfoQueryState.data.user);
            }
        }
    }, [userInfoQueryState.fetched]);

    return (
        <AuthenticationContext.Provider value={{ authUser, isAuthenticated: authUser != null, setAuthUser }}>
            {props.children}
        </AuthenticationContext.Provider>
    );
}

export default AuthenticationProvider;