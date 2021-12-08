import { Module } from '@nestjs/common';
import { ApartmentService } from './apartment.service';
import { MailboxService } from './mailbox.service';

@Module({
    imports: [],
    controllers: [],
    providers: [ApartmentService, MailboxService],
    exports: [MailboxService],
})
export class ApartmentModule {}
