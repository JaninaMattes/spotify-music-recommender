import { Module } from '@nestjs/common';
import { SpotifyMusicService } from './spotify-music.service';
import { SpotifyMusicController } from './spotify-music.controller';

@Module({
  controllers: [SpotifyMusicController],
  providers: [SpotifyMusicService]
})
export class SpotifyMusicModule {}
