import { Module } from '@nestjs/common';
import { GeneratedMusicService } from './generated-music.service';
import { GeneratedMusicController } from './generated-music.controller';

@Module({
  controllers: [GeneratedMusicController],
  providers: [GeneratedMusicService]
})
export class GeneratedMusicModule {}
