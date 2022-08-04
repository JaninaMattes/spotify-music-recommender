import { Injectable } from '@nestjs/common';
import { CreateYoutubeMusicDto } from './dto/create-youtube-music.dto';
import { UpdateYoutubeMusicDto } from './dto/update-youtube-music.dto';

@Injectable()
export class YoutubeMusicService {
  create(createYoutubeMusicDto: CreateYoutubeMusicDto) {
    return 'This action adds a new youtubeMusic';
  }

  findAll() {
    return `This action returns all youtubeMusic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} youtubeMusic`;
  }

  update(id: number, updateYoutubeMusicDto: UpdateYoutubeMusicDto) {
    return `This action updates a #${id} youtubeMusic`;
  }

  remove(id: number) {
    return `This action removes a #${id} youtubeMusic`;
  }
}
