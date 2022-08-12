import { Injectable } from '@nestjs/common';
import { CreateSpotifyMusicDto } from './dto/create-spotify-music.dto';
import { UpdateSpotifyMusicDto } from './dto/update-spotify-music.dto';

@Injectable()
export class SpotifyMusicService {
  create(createSpotifyMusicDto: CreateSpotifyMusicDto) {
    return 'This action adds a new spotifyMusic';
  }

  findAll() {
    return `This action returns all spotifyMusic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} spotifyMusic`;
  }

  update(id: number, updateSpotifyMusicDto: UpdateSpotifyMusicDto) {
    return `This action updates a #${id} spotifyMusic`;
  }

  remove(id: number) {
    return `This action removes a #${id} spotifyMusic`;
  }
}
