import { PartialType } from '@nestjs/mapped-types';
import { CreateSpotifyAuthDto } from './create-spotify-auth.dto';

export class UpdateSpotifyAuthDto extends PartialType(CreateSpotifyAuthDto) {}
