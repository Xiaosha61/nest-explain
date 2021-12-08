import { Module } from '@nestjs/common';
import { ApartmentModule } from 'src/multi-providers-in-one-module/apartment/apartment.module';
// import { MailboxService } from 'src/apartment/mailbox.service'; // ! this is not ideal
import { DeliveryService } from './delivery.service';

@Module({
    imports: [ApartmentModule],
    controllers: [],
    providers: [DeliveryService /*, MailboxService*/], // ! this will make MailboxService being instantiated again
    exports: [DeliveryService],
})
export class DeliveryModule {}
