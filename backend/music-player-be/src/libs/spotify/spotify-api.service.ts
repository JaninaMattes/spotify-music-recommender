import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { map, Observable } from 'rxjs';
import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class SpotifyService {
  private readonly logger = new Logger(SpotifyService.name);
  constructor(private readonly httpService: HttpService) {}

  public async getFavoriteItems(
    type: string,
    limit: number,
    offset: number,
    timeRange: string,
    accessToken: string // TODO: Paas token through injector
  ): Promise<any> {
    const url = process.env.SPOTIFY_BASE_URL + `/me/top/${type}`;
    const params = {
      type: type,
      limit: limit,
      offset: offset,
      time_range: timeRange
    };
    const headers = {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    };
    try {
      const response = this.httpService.get(url, {
        headers: headers,
        params: params,
      });
      return response.pipe(map((res) => res.data));
    } catch (error) {
      this.logger.error(`Download unsuccessful due to: ${error}`);
    }
  }
}
