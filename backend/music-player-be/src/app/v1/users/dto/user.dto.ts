import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';
import { IUser } from 'src/libs/types';

@Expose()
export class UserDto implements IUser{

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

}