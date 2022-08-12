import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloWorldService {

  public getHello(): string {
    return 'Hello World!';
  }

}
