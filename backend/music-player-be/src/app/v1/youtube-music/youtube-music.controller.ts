import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { YoutubeMusicService } from './youtube-music.service';
import { CreateYoutubeMusicDto } from './dto/create-youtube-music.dto';
import { UpdateYoutubeMusicDto } from './dto/update-youtube-music.dto';

@Controller('youtube-music')
export class YoutubeMusicController {
  constructor(private readonly youtubeMusicService: YoutubeMusicService) {}

  @Post()
  create(@Body() createYoutubeMusicDto: CreateYoutubeMusicDto) {
    return this.youtubeMusicService.create(createYoutubeMusicDto);
  }

  @Get()
  findAll() {
    return this.youtubeMusicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.youtubeMusicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateYoutubeMusicDto: UpdateYoutubeMusicDto) {
    return this.youtubeMusicService.update(+id, updateYoutubeMusicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.youtubeMusicService.remove(+id);
  }
}
