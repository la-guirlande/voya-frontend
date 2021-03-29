/**
 * Timestamps interface.
 * 
 * This interface is used with data interfaces that have timestamps by extending this.
 */
interface TimeStamps {
    createdAt: string;
    updatedAt: string;
}

/**
 * Journey data interface.
 */
export interface JourneyData extends TimeStamps {
    id: string;
    public: boolean;
    destinations: DestinationData[];
}

/**
 * Destination data interface.
 */
export interface DestinationData extends TimeStamps {
    city: string;
    lat: number;
    lon: number;
    images: ImageData[];
}

/**
 * Image data interface.
 */
export interface ImageData extends TimeStamps {
    url: string;
}

/**
 * User data interface.
 */
 export interface UserData extends TimeStamps {
    id: string;
    email: string;
    username: string;
    password: string;
    journeys: JourneyData[];
}

/**
 * Error data.
 */
 export interface ErrorData {
    error: ErrorCode;
    error_description: string;
  }
  
  /**
   * Error code type.
   */
  export type ErrorCode =
      'access_denied'
    | 'invalid_client'
    | 'invalid_grant'
    | 'invalid_request'
    | 'invalid_scope'
    | 'network_error'
    | 'not_found'
    | 'server_error'
    | 'temporarily_unavailable'
    | 'unauthorized_client'
    | 'unsupported_grant_type'
    | 'unsupported_response_type'
    | 'validation_failed';
