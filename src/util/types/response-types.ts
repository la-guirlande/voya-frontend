import { DestinationData, JourneyData, ImageData, UserData } from './data-types';

/**
 * Base API response data interface.
 */
export interface Response {
    [key: string]: unknown;
}

/**
 * Image response data interface.
 * 
 * This API response is returned by `GET /images`.
 */
 export interface ImageResponse extends Response {
    images: ImageData[];
}

/**
 * Signin response data interface.
 * 
 * This API response is returned by `POST /auth/signin`.
 */
 export interface SignInResponse extends Response {
    accessToken: string;
    refresh_token: string;
}

/**
 * Signup response data interface.
 * 
 * This API response is returned by `POST /auth/signup`.
 */
export interface SignUpResponse extends Response {
    accessToken: string;
    refresh_token: string;
}

/**
 * User informations response data interface.
 * 
 * This API response is returned by `GET /users/info`.
 */
 export interface UserInfoResponse extends Response {
    user: UserData;
}

/**
 * Users informations response data interface.
 * 
 * This API response is returned by `GET /users`.
 */
export interface UsersResponse extends Response {
    users: UserData[];
}
