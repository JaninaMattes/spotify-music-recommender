import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { SpotifyMusicService } from './spotify-music.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { JWTAuthGuard } from '../spotify-auth/guards/jwt-auth.guard';
import { ISpotifyItem } from 'src/libs/types';

@ApiTags('spotify-music')
@ApiBearerAuth('access-token')
// @UseGuards(JWTAuthGuard)
@Controller('spotify-music')
export class SpotifyMusicController {
  constructor(private readonly spotifyMusicService: SpotifyMusicService) {}

  @ApiOperation({
    summary: 'Get favorite songs/artistd by type.',
    tags: ['Spotify Music'],
  })
  @ApiParam({
    name: 'type',
    description: 'The type of information artists/music',
  })
  @Get(':type')
  getFavoriteItems(
    @Param('type') type: string,
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('timeRange') timeRange: string,
  ): Promise<ISpotifyItem[]> | undefined {
    const accessToken = 'BQAxQkzaisoiXkwTBqxaB4gAYIk9e5b71Qf0RQu9vbHjJBaGQyGOZfm_IgHPw9oPkXHo2JxU6hiEYQolGEcaMvjRkdcTzVoPLlolGAoPlZ-n2gAUTD4KU1buyKSsYHUbbdwB3ewKm6leHT0DGKIgrYnetPAFEdKWH2rASPNwcU36vVV2P1ZU9YlSXiNVi0rVJixMcgRmcg';

    return this.spotifyMusicService.getMyTopItems(
      type,
      limit,
      offset,
      timeRange,
      accessToken,
    );
  }
}
