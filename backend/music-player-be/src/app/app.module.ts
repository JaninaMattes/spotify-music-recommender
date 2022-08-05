import { Module } from "@nestjs/common";
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { V1Module } from './v1/v1.module';
import { AuthModule } from "src/app/auth/auth.module";
import { ConfigModule } from "@nestjs/config";

const imports = [
  ConfigModule.forRoot({
    envFilePath: ['.env.dev'],
    isGlobal: true
  }),
  AuthModule,
  V1Module,
  AutomapperModule.forRoot({
      options: [{ name: '', pluginInitializer: classes }],
      singular: true
  })];
@Module({
  imports: imports,
  controllers: [],
  providers: [],
})
export class AppModule {}
