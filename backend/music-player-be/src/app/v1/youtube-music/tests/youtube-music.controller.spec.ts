import { Test, TestingModule } from '@nestjs/testing';
import { YoutubeMusicController } from './youtube-music.controller';
import { YoutubeMusicService } from './youtube-music.service';

describe('YoutubeMusicController', () => {
  let controller: YoutubeMusicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [YoutubeMusicController],
      providers: [YoutubeMusicService],
    }).compile();

    controller = module.get<YoutubeMusicController>(YoutubeMusicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
