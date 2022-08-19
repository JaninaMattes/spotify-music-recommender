import { Module } from '@nestjs/common';
import { HelloWorldService } from './hello-world.service';
import { HelloWorldController } from './hello-world.controller';

@Module({
  imports: [],
  controllers: [HelloWorldController],
  providers: [HelloWorldService]
})
export class HelloWorldModule { }