import { Injectable, NgModule } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { BtcService } from 'src/app/services/btc.service';
import { BtcdataService } from '../services/btcdata.service';
import { DatePipe } from '@angular/common';
import { Currency } from '../model/currency';

@Injectable()
export class Btcresolver implements Resolve<Observable<Currency>> {
    date: Date;
    constructor(
        private datePipe: DatePipe,
        private btcService: BtcService,
        private btcdataService: BtcdataService
    ) {
        this.btcdataService.currentData.subscribe(date => this.date = date);
    }

    resolve() {
        return this.btcService.getCurrency(this.datePipe.transform(this.date, 'MM/dd/yyyy'));
    }
}
