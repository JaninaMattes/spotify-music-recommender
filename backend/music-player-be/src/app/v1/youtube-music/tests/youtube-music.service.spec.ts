import { Test, TestingModule } from '@nestjs/testing';
import { YoutubeMusicService } from './youtube-music.service';

describe('YoutubeMusicService', () => {
  let service: YoutubeMusicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YoutubeMusicService],
    }).compile();

    service = module.get<YoutubeMusicService>(YoutubeMusicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
