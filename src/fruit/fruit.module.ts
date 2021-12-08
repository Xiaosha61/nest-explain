import { Module } from '@nestjs/common';
import { FruitService } from './fruit.service';

@Module({
  imports: [],
  controllers: [],
  providers: [FruitService],
})
export class FruitModule {}
