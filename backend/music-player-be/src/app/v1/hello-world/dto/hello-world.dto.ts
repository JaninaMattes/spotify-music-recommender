import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString } from 'class-validator';

@Expose()
export class HelloWorldDto {

    @ApiProperty()
    @IsString()
    message: string;
}
