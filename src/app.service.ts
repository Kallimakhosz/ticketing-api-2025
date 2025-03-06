import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getPersonHello(name: string, day: string) {
    return `Hello ${name}, have a nice ${day}`;
  }
}
