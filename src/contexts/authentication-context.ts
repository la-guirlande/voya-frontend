import React from 'react';
import { UserData } from '../util/types/data-types';

/**
 * Authentication context state interface.
 */
interface AuthenticationContextState {
    authUser: UserData;
    isAuthenticated: boolean;
    setAuthUser: (user: UserData) => void;
}

/**
 * Authentication context.
 * 
 * Context used for a user.
 */
const AuthenticationContext = React.createContext<AuthenticationContextState>({ authUser: null, isAuthenticated: false, setAuthUser: null });

export default AuthenticationContext;
