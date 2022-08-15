import { Module } from '@nestjs/common';
import { SpotifyMusicService } from './spotify-music.service';
import { SpotifyMusicController } from './spotify-music.controller';
import { SpotifyModule } from 'src/libs/spotify/spotify.module';

@Module({
  imports: [SpotifyModule],
  controllers: [SpotifyMusicController],
  providers: [SpotifyMusicService]
})
export class SpotifyMusicModule {}
