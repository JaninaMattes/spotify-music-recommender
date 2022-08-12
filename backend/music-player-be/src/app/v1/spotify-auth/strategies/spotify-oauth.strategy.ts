import { Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy, VerifyCallback } from 'passport-spotify';

export class SpotifyOauthStrategy extends PassportStrategy(
  Strategy,
  'spotify',
) {
  private readonly logger = new Logger(SpotifyOauthStrategy.name);
  constructor() {
    super(
      {
        clientID: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
        callbackURL: process.env.SPOTIFY_CALLBACK_URL,
        scope:
          'user-read-private user-read-email playlist-modify-private playlist-read-collaborative playlist-read-private playlist-modify-public',
        showDialog: true,
      },
      (
        accessToken: string,
        refreshToken: string,
        expires_in: number,
        profile: Profile,
        done: VerifyCallback,
      ): void => {
        const authInfo = { accessToken, refreshToken, expires_in };
        // TODO: Persist user information and token
        return done(null, profile, authInfo);
      },
    );
  }
}
