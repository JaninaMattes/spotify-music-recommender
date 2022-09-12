export const environment = {
    production: false,
    localApiUrl: 'http://localhost:3000/v1',
    apiUrl: '', // after deployment
    spotifyAuthentication: {
        baseUrl: 'https://api.spotify.com/v1',
        callbackUrl: '/spotify-auth/callback'
    }
}