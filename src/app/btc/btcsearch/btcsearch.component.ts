import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BtcdataService } from "src/app/services/btcdata.service";

@Component({
  selector: 'app-btcsearch',
  templateUrl: './btcsearch.component.html',
  styleUrls: ['./btcsearch.component.css'],
  providers: [DatePipe]
})
export class BtcsearchComponent implements OnInit {
  date: Date;

  constructor(
    private btcdataService: BtcdataService
  ) { }

  ngOnInit() {
  }

  publishData() {
    this.btcdataService.changeData(this.date);
  }
}
