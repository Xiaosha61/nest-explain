import { Injectable } from '@nestjs/common';

@Injectable()
export class MailboxService {
    private _packages: string[] = [];

    constructor() {
        console.log('constructing MailboxService');
    }

    getPackage(): string[] {
        return this._packages;
    }

    postPackage(newPackage): void {
        this._packages.push(newPackage);
    }
}
