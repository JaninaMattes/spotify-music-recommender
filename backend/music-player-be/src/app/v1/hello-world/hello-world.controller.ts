import { Controller, Get, Logger, Query, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { AccessTokenClaims, Claims } from '../spotify-auth/decorator/access-token-claims.decorator';
import { JWTAuthGuard } from '../spotify-auth/guards/jwt-auth.guard';
import { HelloWorldDto } from './dto/hello-world.dto';
import { HelloWorldService } from './hello-world.service';

@ApiTags('hello-world')
@ApiBearerAuth('access-token')
@UseGuards(JWTAuthGuard)
@Controller('hello-world')
export class HelloWorldController {
  private readonly logger = new Logger(HelloWorldController.name);
  constructor(private readonly helloWorldService: HelloWorldService) {}

  @ApiOperation({ summary: 'Say hello to the world.', tags: ['Hello World'] })
  @ApiResponse({ type: HelloWorldDto })
  @Get()
  public async getHello(@Query('name') name: string, @AccessTokenClaims() claims: Claims): Promise<HelloWorldDto> {
    this.logger.debug(`Received access token claims="${JSON.stringify(claims)}".`);
    const message = await this.helloWorldService.sayHello(name);
    return Promise.resolve({ message });
  }
}
