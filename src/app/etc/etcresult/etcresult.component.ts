import { Component, OnInit } from '@angular/core';
import { Location, DatePipe } from '@angular/common';
import { Currency } from 'src/app/model/currency';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-etcresult',
  templateUrl: './etcresult.component.html',
  styleUrls: ['./etcresult.component.css'],
  providers: [DatePipe]
})
export class EtcresultComponent implements OnInit {
  currency: Currency;
  buyPrice: string;
  buyTime: string;
  sellPrice: string;
  sellTime: string;
  profit: number;
  displayDate: string;
  showResults: boolean;

  constructor(
    private location: Location,
    private datePipe: DatePipe,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.currency = this.route.snapshot.data.currency;
    this.processDataToDisplay(this.currency);
  }

  goBack(): void {
    this.location.back();
  }

  processDataToDisplay(currency: Currency) {
    const quotes = currency.quotes;

    this.displayDate = currency.date;

    if (quotes) {
      //Determine Buy Time and Buy Price
      this.buyPrice = quotes[0].price;
      this.buyTime = this.formatTime(quotes[0].time);

      //Determine Sell Time and Sell Price
      var res = Math.max.apply(Math, quotes.map(function (o) { return o.price; }));
      var sellQuote = quotes.find(function (o) { return o.price == res; });

      this.sellPrice = sellQuote.price;
      this.sellTime = this.formatTime(sellQuote.time);

      //Determine profit
      this.profit = +this.sellPrice - +this.buyPrice;
      this.showResults = true;
    }
  }

  formatTime(time: string): string {
    const date = new Date();
    date.setHours(+time.substring(0, 2), +time.substring(2, 4), +'00');
    return this.datePipe.transform(date, 'hh:mm a');
  }

}
