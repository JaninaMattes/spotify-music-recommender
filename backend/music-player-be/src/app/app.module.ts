import { Module } from "@nestjs/common";
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { V1Module } from './v1/v1.module';

@Module({
  imports: [V1Module,
    AutomapperModule.forRoot({
        options: [{ name: '', pluginInitializer: classes }],
        singular: true
    })],
  controllers: [],
  providers: [],
})
export class AppModule {}
