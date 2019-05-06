import { Injectable, NgModule } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { EtcService } from 'src/app/services/etc.service';
import { EtcdataService } from '../services/etcdata.service';
import { DatePipe } from '@angular/common';
import { Currency } from '../model/currency';

@Injectable()
export class Etcresolver implements Resolve<Observable<Currency>> {
    date: Date;
    constructor(
        private datePipe: DatePipe,
        private etcService: EtcService,
        private etcdataService: EtcdataService
    ) {
        this.etcdataService.currentData.subscribe(date => this.date = date);
    }

    resolve() {
        return this.etcService.getCurrency(this.datePipe.transform(this.date, 'MM/dd/yyyy'));
    }
}
