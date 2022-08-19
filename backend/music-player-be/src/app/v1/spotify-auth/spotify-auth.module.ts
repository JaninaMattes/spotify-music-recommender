import { Module } from '@nestjs/common';
import { SpotifyAuthService } from './spotify-auth.service';
import { SpotifyAuthController } from './spotify-auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategies/jwt.strategy';
import { SpotifyOauthStrategy } from './strategies/spotify-oauth.strategy';
import { SpotifyModule } from 'src/libs/spotify/spotify.module';
import { UsersModule } from '../users/users.module';

const imports = [
  PassportModule,
  JwtModule.registerAsync({
    useFactory: async () => {
      return {
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: '3600s', //1hr
        },
      };
    },
    inject: [ConfigService],
  }),
  UsersModule,
  SpotifyModule
];

const controllers = [SpotifyAuthController];
const providers = [SpotifyAuthService, JwtStrategy, SpotifyOauthStrategy];

@Module({
  imports: imports,
  controllers: controllers,
  providers: providers,
})
export class SpotifyAuthModule {}
