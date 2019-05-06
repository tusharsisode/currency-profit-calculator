import { Injectable, NgModule } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { LtcService } from 'src/app/services/ltc.service';
import { LtcdataService } from '../services/ltcdata.service';
import { DatePipe } from '@angular/common';
import { Currency } from '../model/currency';

@Injectable()
export class Ltcresolver implements Resolve<Observable<Currency>> {
    date: Date;
    constructor(
        private datePipe: DatePipe,
        private ltcService: LtcService,
        private ltcdataService: LtcdataService
    ) {
        this.ltcdataService.currentData.subscribe(date => this.date = date);
    }

    resolve() {
        return this.ltcService.getCurrency(this.datePipe.transform(this.date, 'MM/dd/yyyy'));
    }
}
