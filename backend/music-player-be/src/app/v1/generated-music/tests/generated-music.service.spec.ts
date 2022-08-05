import { Test, TestingModule } from '@nestjs/testing';
import { GeneratedMusicService } from './generated-music.service';

describe('GeneratedMusicService', () => {
  let service: GeneratedMusicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneratedMusicService],
    }).compile();

    service = module.get<GeneratedMusicService>(GeneratedMusicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
