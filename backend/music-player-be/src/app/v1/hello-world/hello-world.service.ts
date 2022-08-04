import { Injectable } from '@nestjs/common';
import { CreateHelloWorldDto } from './dto/create-hello-world.dto';
import { UpdateHelloWorldDto } from './dto/update-hello-world.dto';

@Injectable()
export class HelloWorldService {
  create(createHelloWorldDto: CreateHelloWorldDto) {
    return 'This action adds a new helloWorld';
  }

  findAll() {
    return `This action returns all helloWorld`;
  }

  findOne(id: number) {
    return `This action returns a #${id} helloWorld`;
  }

  update(id: number, updateHelloWorldDto: UpdateHelloWorldDto) {
    return `This action updates a #${id} helloWorld`;
  }

  remove(id: number) {
    return `This action removes a #${id} helloWorld`;
  }
}
