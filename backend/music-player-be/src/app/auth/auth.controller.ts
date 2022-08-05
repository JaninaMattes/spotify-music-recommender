import { Controller, Get, Logger, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { Profile } from 'passport-spotify';
import { SpotifyOauthGuard } from './guards/spotify-oauth.guard';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

/**
 * More information regarding Spotify API usage under docs:
 * https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
 */
@ApiTags('auth')
@Controller('auth')
export class AuthController {
  private readonly logger = new Logger(AuthController.name);

  constructor(private readonly authService: AuthService) {}

/**
 * Endpoint that users access to
 * initiate the authentification.
 * @returns 
 */
  @UseGuards(SpotifyOauthGuard)
  @Get('login')
  spotifyAuthLogin(): void {
    return;
  }

  /**
   * Endpoint the user gets redirected to
   * once successfully logged in.
   * @param req
   * @param res
   * @returns
   */
  @UseGuards(SpotifyOauthGuard)
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
      // unsuccessful authentification
      // redirect to login page
      // TODO: Fix logic
      res.redirect('login');
      return;
    }

    req.user = undefined;

    const jwt = this.authService.login(user);

    res.set('authorization', `Bearer ${jwt}`);

    // returns user info and spotify token
    return res.status(201).json({ authInfo, user });
  }
}
