import React, { useEffect, useState } from 'react';
import AuthenticationContext from '../../contexts/authentication-context';
import { Status, useQuery } from '../../hooks/query-hook';

import { Config } from '../../util/config';
import { LocalStorageKey } from '../../util/local-storage';
import { UserData } from '../../util/types/data-types';
import { UserInfoResponse } from '../../util/types/response-types';

const AuthenticationProvider: React.FC = (props) => {
    const [authUser, setAuthUser] = useState<UserData>(null);
    const userInfoQuery = useQuery<UserInfoResponse>();

    useEffect(() => {
        switch (userInfoQuery.status) {
            case Status.INIT:
                userInfoQuery.get(`http://localhost/users/info`, {
                    headers: { Authorization: `Bearer ${localStorage.getItem(LocalStorageKey.ACCESS_TOKEN)}`}
                });
                break;
            case Status.SUCCESS:
                setAuthUser(userInfoQuery.response.user);
                break;
        }
    }, [userInfoQuery.status]);

    return (
        <AuthenticationContext.Provider value={{ authUser, isAuthenticated: authUser != null, setAuthUser }}>
            {props.children}
        </AuthenticationContext.Provider>
    );
}

export default AuthenticationProvider;