import { PartialType } from '@nestjs/mapped-types';
import { CreateGeneratedMusicDto } from './create-generated-music.dto';

export class UpdateGeneratedMusicDto extends PartialType(CreateGeneratedMusicDto) {}
