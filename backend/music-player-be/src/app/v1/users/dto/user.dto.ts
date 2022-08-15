import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

@Expose()
export class UserDto {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    id: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    username: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    displayName: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    profileUrl: string;

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    photos: string[];

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    country: string;

}