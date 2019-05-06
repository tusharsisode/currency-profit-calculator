import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { LtcdataService } from "src/app/services/ltcdata.service";

@Component({
  selector: 'app-ltcsearch',
  templateUrl: './ltcsearch.component.html',
  styleUrls: ['./ltcsearch.component.css'],
  providers: [DatePipe]
})
export class LtcsearchComponent implements OnInit {
  date: Date;

  constructor(
    private ltcdataService: LtcdataService
  ) { }

  ngOnInit() {
  }

  publishData() {
    this.ltcdataService.changeData(this.date);
  }
}
