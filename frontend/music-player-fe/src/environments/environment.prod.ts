export const environment = {
  production: true,
  testApiUrl: 'http://localhost:3000',
  apiUrl: '', // after deployment
  spotifyAuthentication: {
      baseUrl: 'https://api.spotify.com/v1',
      callbackUrl: '/auth/callback'
  }
}