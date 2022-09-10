export interface ISpotifyResult {
    authInfo: IAuth,
    user: IUser,
    expires_at: string
    nonce: string
}

export interface IAuth {
    accessToken: string;
    refreshToken: string;
    expires_in: string;
}

export interface IUser {
    provider: string;
    id: string;
    username: string;
    displayName: string;
    profileUrl: string | null;
    photos: [string] | null;
    country: string;
    followers: number | null;
    product: string | null;
    emails?: [{ value: string; type: null }] | undefined;
}

export interface SpotifyAuthUser {
    provider: string;
    id: string;
    username: string;
    displayName: string;
    profileUrl: string | null;
    photos: [string] | null;
    country: string;
    followers: number | null;
    product: string | null;
    emails?: [{ value: string; type: null }] | undefined;
    expires_in: number;
}