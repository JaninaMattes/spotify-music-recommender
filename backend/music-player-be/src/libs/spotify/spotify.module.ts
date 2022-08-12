import { Module } from '@nestjs/common';
import { SpotifyService } from './spotify-api.service';

const services = [
    SpotifyService
];

@Module({
    providers: services,
    exports: services
})
export class SpotifyModule {}
