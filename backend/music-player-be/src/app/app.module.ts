import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from "@nestjs/config";
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { V1Module } from './v1/v1.module';

const imports = [
  ConfigModule.forRoot({
    envFilePath: ['.env.dev'],
    isGlobal: true
  }),
  MongooseModule.forRoot('mongodb://spotify-root:spotify-pwd@localhost:27017/spotify-mongodb'),
  HttpModule,
  V1Module
];

@Module({
  imports: imports,
  controllers: [],
  providers: [],
})
export class AppModule {}
