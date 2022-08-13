import { Module } from '@nestjs/common';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { SpotifyAuthModule } from './spotify-auth/spotify-auth.module';
import { SpotifyMusicModule } from './spotify-music/spotify-music.module';

const imports = [HelloWorldModule, SpotifyAuthModule, SpotifyMusicModule];

@Module({
  imports: imports,
})
export class V1Module {}
