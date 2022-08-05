import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Profile } from 'passport-spotify';

@Injectable()
export class AuthService {

  private readonly logger = new Logger(AuthService.name);
  constructor(private readonly jwtService: JwtService) {}

  login(user: Profile) {
    const payload = {
      name: user.username,
      sub: user.id,
    };

    return this.jwtService.sign(payload);
  }
}
