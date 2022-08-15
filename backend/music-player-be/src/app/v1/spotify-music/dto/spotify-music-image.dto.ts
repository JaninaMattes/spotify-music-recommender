import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

@Expose()
export class SpotifyImageDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    url: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    height: number;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    width: number;

}