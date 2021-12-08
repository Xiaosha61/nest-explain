import { Injectable } from '@nestjs/common';
import { MailboxService } from 'src/apartment/mailbox.service';

@Injectable()
export class DeliveryService {
    private _packagePosted: string[] = [];

    constructor(private _mailboxService: MailboxService) {
        console.log('constructing DeliveryService');
    }

    postPackage(newPackage: string) {
        this._packagePosted.push(newPackage);

        this._mailboxService.postPackage(newPackage);
    }

    getAllPackagePosted(): string[] {
        return this._packagePosted;
    }
}
