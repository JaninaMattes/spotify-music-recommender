import { Test, TestingModule } from '@nestjs/testing';
import { GeneratedMusicController } from './generated-music.controller';
import { GeneratedMusicService } from './generated-music.service';

describe('GeneratedMusicController', () => {
  let controller: GeneratedMusicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneratedMusicController],
      providers: [GeneratedMusicService],
    }).compile();

    controller = module.get<GeneratedMusicController>(GeneratedMusicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
