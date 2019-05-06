import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LtcdataService {
  private dataSource = new BehaviorSubject(new Date());
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(date: Date) {
    this.dataSource.next(date);
  }
}
