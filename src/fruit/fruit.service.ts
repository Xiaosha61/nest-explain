import { Injectable } from '@nestjs/common';

@Injectable()
export class FruitService {
  getName(): string {
    return 'FRUIT!';
  }
}
