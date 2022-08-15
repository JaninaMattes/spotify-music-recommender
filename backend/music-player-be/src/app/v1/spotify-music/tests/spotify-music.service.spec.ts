import { Test, TestingModule } from '@nestjs/testing';
import { SpotifyMusicService } from '../spotify-music.service';

describe('SpotifyMusicService', () => {
  let service: SpotifyMusicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpotifyMusicService],
    }).compile();

    service = module.get<SpotifyMusicService>(SpotifyMusicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
