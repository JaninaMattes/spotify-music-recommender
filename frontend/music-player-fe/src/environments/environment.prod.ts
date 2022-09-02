export const environment = {
  production: true,
  apiUrl: '', // after deployment
  spotifyAuthentication: {
      tokens: 'id_token tokens',
      baseUrl: 'https://api.spotify.com/v1',
      callbackUrl: '/auth/callback',
      clientId: '13a7457595ca4a9da2edecd71917a6dd'
  }
}