import { Injectable } from "@nestjs/common";
import { CreateSpotifyMusicDto } from "./dto/create-spotify-music.dto";
import { UpdateSpotifyMusicDto } from "./dto/update-spotify-music.dto";

@Injectable()
export class SpotifyMusicService {

    remove(arg0: number) {
    throw new Error('Method not implemented.');
  }
  
  update(arg0: number, updateSpotifyMusicDto: UpdateSpotifyMusicDto) {
    throw new Error('Method not implemented.');
  }
  
  findOne(arg0: number) {
    throw new Error('Method not implemented.');
  }
  
  findAll() {
    throw new Error('Method not implemented.');
  }
  
  create(createSpotifyMusicDto: CreateSpotifyMusicDto) {
    throw new Error('Method not implemented.');
  }
}