
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  /**
   * Inserts a user object into payload.
   * @param payload 
   * @returns 
   */
  async validate(payload: {
    name: string;
    sub: string;
  }): Promise<{ name: string; sub: string }> {
    return payload;
  }
}