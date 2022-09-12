import { Controller, Get, Logger, Req, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { Profile } from 'passport-spotify';
import { ApiTags } from '@nestjs/swagger';
import { SpotifyAuthService } from './spotify-auth.service';
import { SpotifyOauthGuard } from './guards/spotify-oauth.guard';

/**
 * Integrate an OAuth2 authorization code flow strategy for the Spotify Web API in a NodeJS 
 * with TypeScript and NestJS back end application
 *
 * More general information regarding Spotify API usage under docs:
 * https://developer.spotify.com/documentation/general/guides/authorization/code-flow/
 */
@ApiTags('spotify-auth')
@UseGuards(SpotifyOauthGuard)
@Controller('v1/spotify-auth')
export class SpotifyAuthController {
  private readonly logger = new Logger(SpotifyAuthController.name);
  constructor(private readonly spotifyAuthService: SpotifyAuthService) {}

  /**
   * Endpoint that users access to
   * initiate the OAuth2 authentification code flow.
   * @returns
   */
  @Get('/login')
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
  @Get('/callback')
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
      this.logger.debug('User could not be authenticated via Spotify API');
      res.redirect('/');
      return;
    }

    this.logger.debug('User successfully authenticated via Spotify API');

    req.user = undefined;

    const jwt = this.spotifyAuthService.login(user);

    res.set('Access-Control-Allow-Origin', '*')
    res.set('Authorization', `Bearer ${jwt}`);

    // returns user info and signed jwt token
    return res.status(201).json({ authInfo, user });
  }
}