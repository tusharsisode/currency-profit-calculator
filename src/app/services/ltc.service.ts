import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Currency } from '../model/currency';
import { Settings } from '../settings';

@Injectable({
  providedIn: 'root'
})

export class LtcService {

  constructor(private http: HttpClient) { }

  /** GET Curreny details from the server */
  getCurrency(date: string): Observable<Currency> {
    return this.http.get(`${Settings.LTC_API_ENDPOINT}/?inputDate=${date}`)
      .pipe(
        tap((receivedData: Currency) => console.log(receivedData)),
        catchError(this.handleError<Currency>('getCurrency', new Currency()))
      );
  }

  /**
  * Handle Http operation that failed.
  * Let the app continue.
  * @param operation - name of the operation that failed
  * @param result - optional value to return as the observable result
  */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
