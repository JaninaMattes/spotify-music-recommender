import { PartialType } from '@nestjs/mapped-types';
import { ApiProperty } from '@nestjs/swagger';
import { IsDate, IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDto {
    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    id: string;

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
    @IsDate()
    expiresAt: Date;
}
