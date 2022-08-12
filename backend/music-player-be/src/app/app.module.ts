import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { V1Module } from './v1/v1.module';

const imports = [
  ConfigModule.forRoot({
    envFilePath: ['.env.dev'],
    isGlobal: true
  }),
  V1Module
];

@Module({
  imports: imports,
  controllers: [],
  providers: [],
})
export class AppModule {}
