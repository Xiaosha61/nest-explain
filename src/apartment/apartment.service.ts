import { Injectable } from '@nestjs/common';
import { MailboxService } from './mailbox.service';

@Injectable()
export class ApartmentService {
    private _address = 'dresden';

    constructor(private _mailboxService: MailboxService) {
        console.log('constructing ApartmentService');
    }

    getAddress(): string {
        return this._address;
    }
}
