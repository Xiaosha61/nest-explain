import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CakeModule } from './cake/cake.module';
import { FruitModule } from './fruit/fruit.module';

@Module({
  imports: [CakeModule, FruitModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
