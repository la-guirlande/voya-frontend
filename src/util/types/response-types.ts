import { DestinationData, JourneyData, ImageData, UserData, ErrorData } from './data-types';

/**
 * Base API response data interface.
 */
export interface Response {
    [key: string]: unknown;
}

/**
 * Error response.
 */
 export interface ErrorResponse extends Response {
    errors: ErrorData[];
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
 * Access token response interface.
 */
 export interface AccessTokenResponse extends Response {
    access_token: string;
  }

/**
 * Refresh token response interface.
 */
 export interface RefreshTokenResponse extends Response {
    access_token: string;
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

/**
 * Creation response interface.
 * 
 * This API response is returned by any `POST` that creates a new resource.
 */
 export interface CreationResponse extends Response {
    id: string;
  }

  /**
 * Users trips response data interface.
 * 
 * This API response is returned by `GET /users/:id/journeys`.
 */
export interface JourneysResponse extends Response {
  journeys: JourneyData[];
}