import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { GeneratedMusicModule } from './generated-music/generated-music.module';
import { HelloWorldModule } from './hello-world/hello-world.module';
import { RecommendationsModule } from './recommendations/recommendations.module';
import { SpotifyMusicModule } from './spotify-music/spotify-music.module';
import { UsersModule } from './users/users.module';
import { YoutubeMusicModule } from './youtube-music/youtube-music.module';

const apiVersion = 'v1';

const modules = [
    GeneratedMusicModule, // generated-music.module.ts
    HelloWorldModule,
    RecommendationsModule,
    YoutubeMusicModule,
    SpotifyMusicModule,
    UsersModule
];

@Module({
    imports: [
        RouterModule.register(
            modules.map(mod => {
                return { path: `/${apiVersion}`, module: mod };
            })
        ),
        ...modules
    ]
})
export class V1Module { }
