import { Injectable } from '@nestjs/common';

@Injectable()
export class CakeService {
  getName(): string {
    return 'CAKE!';
  }
}
