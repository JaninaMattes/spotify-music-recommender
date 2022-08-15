import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SpotifyService {
  private readonly logger = new Logger(SpotifyService.name);
  constructor(private readonly httpService: HttpService) {}

  public async getMyTopItems(
    type: string,
    limit: number,
    offset: number,
    timeRange: string,
    accessToken: string // TODO: Paas token 
  ): Promise<any> | undefined {
    const url = process.env.SPOTIFY_BASE_URL + `/me/top/${type}`;
    const params = {
      limit: limit,
      offset: offset,
      time_range: timeRange
    };
    const headers = {
      Authorization: `Bearer ${accessToken}`
    };
    try {
      const response = this.httpService.get(url, {
        headers: headers,
        params: params,
      });
      return response.pipe(map((res) => res.data));
    } catch (error) {
      this.logger.error(`Request top items unsuccessful, error= ${error}`);
    }
  }
}
