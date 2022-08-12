import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpotifyMusicService } from './spotify-music.service';
import { CreateSpotifyMusicDto } from './dto/create-spotify-music.dto';
import { UpdateSpotifyMusicDto } from './dto/update-spotify-music.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('spotify-music')
@Controller('spotify-music')
export class SpotifyMusicController {
  constructor(private readonly spotifyMusicService: SpotifyMusicService) {}

  @Post()
  create(@Body() createSpotifyMusicDto: CreateSpotifyMusicDto) {
    return this.spotifyMusicService.create(createSpotifyMusicDto);
  }

  @Get()
  findAll() {
    return this.spotifyMusicService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spotifyMusicService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpotifyMusicDto: UpdateSpotifyMusicDto) {
    return this.spotifyMusicService.update(+id, updateSpotifyMusicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spotifyMusicService.remove(+id);
  }
}
