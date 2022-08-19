export interface ISpotifyItem {
    id: string;
    name: string;
}

export interface IUser {
    id: string;
    displayName: string;
    profileUrl: string;
}

export interface AuthInfo {
    accessToken: string;
    refreshToken: string;
    expires_in: number;
}