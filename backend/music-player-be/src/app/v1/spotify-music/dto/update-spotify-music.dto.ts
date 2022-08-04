import { PartialType } from '@nestjs/mapped-types';
import { CreateSpotifyMusicDto } from './create-spotify-music.dto';

export class UpdateSpotifyMusicDto extends PartialType(CreateSpotifyMusicDto) {}
