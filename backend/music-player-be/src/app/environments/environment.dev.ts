export const environment = {
    production: false,
    localApiUrl: 'http://localhost:3000/v1',
    apiUrl: '', // after deployment
    spotifyAuthentication: {
        baseUrl: 'https://api.spotify.com/v1',
        callbackUrl: '/spotify-auth/callback',
        clientId: '38b77c13fdd445c9abfe0d7610c55e59'
    }
}