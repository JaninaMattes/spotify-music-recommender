import { Module } from '@nestjs/common';
import { YoutubeMusicService } from './youtube-music.service';
import { YoutubeMusicController } from './youtube-music.controller';

@Module({
  controllers: [YoutubeMusicController],
  providers: [YoutubeMusicService]
})
export class YoutubeMusicModule {}
