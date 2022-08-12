import { Injectable } from '@nestjs/common';
import { SpotifyService } from 'src/libs/spotify/spotify-api.service';

@Injectable()
export class SpotifyMusicService {
  constructor(private readonly spotifyService: SpotifyService) {}

  findAll() {
    throw new Error('Method not implemented.');
  }

  public async getFavoriteItems(
    type: string,
    limit: number,
    offset: number,
    timeRange: string,
    accessToken: string,
  ): Promise<any> {
    const result = await this.spotifyService.getFavoriteItems(
      type,
      limit,
      offset,
      timeRange,
      accessToken,
    );
    return result;
  }
}
