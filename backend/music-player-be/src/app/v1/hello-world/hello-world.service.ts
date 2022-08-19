import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class HelloWorldService {

  private readonly logger = new Logger(HelloWorldService.name);

  public async sayHello(name: string): Promise<string> {
    this.logger.debug(`Received name="${name}".`);

    return Promise.resolve(`Hello ${name}, welcome to your NestJs App.`);
}

}
