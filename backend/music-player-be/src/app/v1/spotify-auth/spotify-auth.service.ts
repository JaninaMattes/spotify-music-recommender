import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Profile } from 'passport-spotify';
import { AuthInfo } from 'src/libs/types';
import { UserDocument } from '../users/schemas/users.schema';
import { UsersService } from '../users/users.service';


@Injectable()
export class SpotifyAuthService {
  
  private readonly logger = new Logger(SpotifyAuthService.name);
  constructor(private readonly jwtService: JwtService,
    private readonly usersService: UsersService) {}

  public login(user: Profile) {
    const payload = {
      name: user.username,
      sub: user.id,
    };
    return this.jwtService.sign(payload);
  }
 
  public async create(user: Profile, auth: AuthInfo): Promise<UserDocument> {
    const timeInMillSec = new Date().getTime() + auth.expires_in * 1000; // exp_in: time period (in seconds) for which the access token is valid
    const expiresAt = new Date(timeInMillSec); 
    const createUserDto = { id: user.id, displayName: user.displayName, profileUrl: user.profileUrl, accessToken: auth.accessToken, refreshToken: auth.refreshToken, expiresAt: expiresAt};
    return this.usersService.create(createUserDto);
  }
}
