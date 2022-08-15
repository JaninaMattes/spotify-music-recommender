import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SpotifyService } from './spotify-api.service';

const services = [
    SpotifyService
];

@Module({
    imports: [HttpModule],
    providers: services,
    exports: services
})
export class SpotifyModule {}
