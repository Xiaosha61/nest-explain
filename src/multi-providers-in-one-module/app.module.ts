import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DeliveryModule } from './delivery/delivery.module';
import { ApartmentModule } from './apartment/apartment.module';

@Module({
    imports: [DeliveryModule, ApartmentModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
