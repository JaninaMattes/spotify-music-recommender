import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GeneratedMusicService } from './generated-music.service';
import { CreateGeneratedMusicDto } from './dto/create-generated-music.dto';
import { UpdateGeneratedMusicDto } from './dto/update-generated-music.dto';

@Controller('generated-music')
export class GeneratedMusicController {
  constructor(private readonly generatedMusicService: GeneratedMusicService) {}

  @Post()
  create(@Body() createGeneratedMusicDto: CreateGeneratedMusicDto) {
    return this.generatedMusicService.create(createGeneratedMusicDto);
  }

  @Get()
  findAll() {
    return this.generatedMusicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.generatedMusicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGeneratedMusicDto: UpdateGeneratedMusicDto) {
    return this.generatedMusicService.update(+id, updateGeneratedMusicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.generatedMusicService.remove(+id);
  }
}
