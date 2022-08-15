import { ApiProperty } from "@nestjs/swagger"
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';

@Expose()
export class SpotifyAuthDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    user_id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    accessToken: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    refreshToken: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    expires_in: number;

}