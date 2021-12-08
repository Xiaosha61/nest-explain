import { Injectable } from '@nestjs/common';
import { DeliveryService } from './delivery/delivery.service';

@Injectable()
export class AppService {
    constructor(private _deliveryService: DeliveryService) {
        console.log('constructing AppService');
    }

    getHello(): string {
        return 'Hello World!';
    }

    checkDeliveryLoad(): number {
        return this._deliveryService.getAllPackagePosted().length;
    }
}
