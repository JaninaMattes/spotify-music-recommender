import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

@Expose()
export class ArtistDto {

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
  type: string[];

  @ApiProperty()
  @IsOptional()
  @IsString()
  external_urls: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  uri: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  href: string;

}
