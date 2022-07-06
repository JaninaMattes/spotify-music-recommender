import { Controller, Get, Logger, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';

@ApiTags('v1')
@Controller('v1')
export class AppController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly appService: AppService) {}

  @UseGuards(JwtAuthGuard)
  @Get('home')
  getHello(): string {
    return this.appService.getHello();
  }
}
