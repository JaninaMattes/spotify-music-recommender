import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { SpotifyMusicService } from './spotify-music.service';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../spotify-auth/guards/jwt-auth.guard';
import { access } from 'fs';

@ApiTags('spotify-music')
@UseGuards(JwtAuthGuard)
@Controller('spotify-music')
export class SpotifyMusicController {
  constructor(private readonly spotifyMusicService: SpotifyMusicService) {}

  @ApiOperation({ summary: 'Get the main favorite songs.', tags: ['Spotify Music'] })
  @Get()
  findAll() {
    return this.spotifyMusicService.findAll();
  }

  @ApiOperation({ summary: 'Get single favorite song by id.', tags: ['Spotify Music'] })
  @ApiParam({ name: 'id', description: 'The identifier of a specific song' })
  @Get(':type')
  getFavoriteItems(@Param('type') type: string, @Query('limit') limit: number, @Query('offset') offset: number, @Query('timeRange') timeRange: string){
    return this.spotifyMusicService.getFavoriteItems(type, limit, offset, timeRange, accessToken);
  }

}
