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
