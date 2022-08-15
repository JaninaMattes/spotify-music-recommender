import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsNumber, IsOptional, IsObject } from 'class-validator';
import { ISpotifyItem } from 'src/libs/types';
import { ArtistDto } from './artist.dto';
import { SpotifyImageDto } from './spotify-music-image.dto';


@Expose()
export class SpotifyTrackDto implements ISpotifyItem{

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
    album: string

    @ApiProperty()
    @IsOptional()
    @IsObject()
    artists: ArtistDto[];

    @ApiProperty()
    @IsOptional()
    @IsObject()
    images: SpotifyImageDto[];

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    popularity: number;
  
}