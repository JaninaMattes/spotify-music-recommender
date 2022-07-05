import { Controller, Get, Logger, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { Profile } from 'passport-spotify';
import { SpotifyOauthGuard } from './guards/spotify-oauth.guard';
import { AuthService } from './auth.service';
import { ApiOAuth2, ApiTags } from '@nestjs/swagger';

/**
 * More information regarding Spotify API usage under docs: 
 * https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
 */
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

  //@UseGuards(SpotifyOauthGuard)
  @Get('login')
  async spotifyAuthLogin(
    @Req() req: any,
    @Res() res: Response,
  ): Promise<void> {
    var state = (Math.random() + 1).toString(16).substring(7);
    var scope = 'user-read-private user-read-email';

    res.redirect(
      'https://accounts.spotify.com/authorize?' +
        JSON.stringify({
          response_type: 'code',
          scope: scope,
          client_id: process.env.SPOTIFY_CLIENT_ID,
          redirect_url: process.env.CALLBACK_URL,
          state: state,
        }),
    );
  }

  //@UseGuards(SpotifyOauthGuard)
  @Get('redirect')
  async spotifyAuthRedirect(
    @Req() req: any,
    @Res() res: Response,
  ): Promise<Response> {
    const {
      user,
      authInfo,
    }: {
      user: Profile;
      authInfo: {
        accessToken: string;
        refreshToken: string;
        expires_in: number;
      };
    } = req;

    if (!user) {
      res.redirect('/v1/home');
      return;
    }

    req.user = undefined;

    const jwt = this.authService.login(user);

    res.set('authorization', `Bearer ${jwt}`);

    return res.status(201).json({ authInfo, user });
  }
}
