import { PartialType } from '@nestjs/mapped-types';
import { CreateYoutubeMusicDto } from './create-youtube-music.dto';

export class UpdateYoutubeMusicDto extends PartialType(CreateYoutubeMusicDto) {}
