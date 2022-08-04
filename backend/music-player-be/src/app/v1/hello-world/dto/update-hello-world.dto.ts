import { PartialType } from '@nestjs/mapped-types';
import { CreateHelloWorldDto } from './create-hello-world.dto';

export class UpdateHelloWorldDto extends PartialType(CreateHelloWorldDto) {}
