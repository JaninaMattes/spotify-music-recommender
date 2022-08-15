import { Test, TestingModule } from '@nestjs/testing';
import { SpotifyMusicController } from '../spotify-music.controller';
import { SpotifyMusicService } from '../spotify-music.service';

describe('SpotifyMusicController', () => {
  let controller: SpotifyMusicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpotifyMusicController],
      providers: [SpotifyMusicService],
    }).compile();

    controller = module.get<SpotifyMusicController>(SpotifyMusicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
