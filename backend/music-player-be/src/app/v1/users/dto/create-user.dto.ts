import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsDate, IsString } from 'class-validator';
import { IUser } from 'src/libs/types';

@Expose()
export class CreateUserDto implements IUser {

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    id: string;
    
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
