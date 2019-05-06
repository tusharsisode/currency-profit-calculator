import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EtcdataService } from "src/app/services/etcdata.service";

@Component({
  selector: 'app-etcsearch',
  templateUrl: './etcsearch.component.html',
  styleUrls: ['./etcsearch.component.css'],
  providers: [DatePipe]
})
export class EtcsearchComponent implements OnInit {
  date: Date;

  constructor(
    private etcdataService: EtcdataService
  ) { }

  ngOnInit() {
  }

  publishData() {
    this.etcdataService.changeData(this.date);
  }
}
