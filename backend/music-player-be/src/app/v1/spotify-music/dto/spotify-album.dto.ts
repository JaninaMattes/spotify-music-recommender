import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsNumber, IsObject, IsOptional } from 'class-validator';
import { ISpotifyItem } from 'src/libs/types';
import { SpotifyImageDto } from './spotify-music-image.dto';

@Expose()
export class SpotifyAlbumDto implements ISpotifyItem{

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  id: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  genres: string[];

  @ApiProperty()
  @IsOptional()
  @IsObject()
  images: SpotifyImageDto[];

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  popularity: number;

}
