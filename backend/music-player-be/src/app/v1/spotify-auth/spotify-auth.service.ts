import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Profile } from 'passport-spotify';


@Injectable()
export class SpotifyAuthService {
  
  private readonly logger = new Logger(SpotifyAuthService.name);
  constructor(private readonly jwtService: JwtService) {}

  public login(user: Profile) {
    const payload = {
      name: user.username,
      sub: user.id,
    };
    return this.jwtService.sign(payload);
  }
 
}
