import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-data-not-found',
  templateUrl: './data-not-found.component.html',
  styleUrls: ['./data-not-found.component.css']
})
export class DataNotFoundComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

}
