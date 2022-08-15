import { Injectable, Logger } from '@nestjs/common';
import { SpotifyService } from 'src/libs/spotify/spotify-api.service';
import { ISpotifyItem } from 'src/libs/types';

@Injectable()
export class SpotifyMusicService {
  private readonly logger = new Logger(SpotifyMusicService.name);
  constructor(private readonly spotifyService: SpotifyService) {}

  public async getMyTopItems(
    type: string,
    limit: number,
    offset: number,
    timeRange: string,
    accessToken: string,
  ): Promise<ISpotifyItem[]> | undefined {
    const result = await this.spotifyService.getMyTopItems(
      type,
      limit,
      offset,
      timeRange,
      accessToken,
    );
    return result;
  }
}
