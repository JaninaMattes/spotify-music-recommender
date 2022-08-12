import { Controller, Get, Logger, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../spotify-auth/guards/jwt-auth.guard';
import { HelloWorldService } from './hello-world.service';

@ApiTags('hello-world')
@UseGuards(JwtAuthGuard)
@Controller('hello-world')
export class HelloWorldController {
  private readonly logger = new Logger(HelloWorldController.name);
  constructor(private readonly helloWorldService: HelloWorldService) {}

  @ApiOperation({ summary: 'Say hello to the world.', tags: ['Hello World'] })
  @ApiResponse({ type: String })
  @Get()
  getHello(): string {
    return this.helloWorldService.getHello();
  }
}
