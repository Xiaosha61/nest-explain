import { Module } from '@nestjs/common';
import { CakeService } from './cake.service';

@Module({
  imports: [],
  controllers: [],
  providers: [CakeService],
})
export class CakeModule {}
