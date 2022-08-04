import { Injectable } from '@nestjs/common';
import { CreateGeneratedMusicDto } from './dto/create-generated-music.dto';
import { UpdateGeneratedMusicDto } from './dto/update-generated-music.dto';

@Injectable()
export class GeneratedMusicService {
  create(createGeneratedMusicDto: CreateGeneratedMusicDto) {
    return 'This action adds a new generatedMusic';
  }

  findAll() {
    return `This action returns all generatedMusic`;
  }

  findOne(id: number) {
    return `This action returns a #${id} generatedMusic`;
  }

  update(id: number, updateGeneratedMusicDto: UpdateGeneratedMusicDto) {
    return `This action updates a #${id} generatedMusic`;
  }

  remove(id: number) {
    return `This action removes a #${id} generatedMusic`;
  }
}
