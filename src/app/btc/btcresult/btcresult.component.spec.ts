import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcresultComponent } from './btcresult.component';

describe('BtcresultComponent', () => {
  let component: BtcresultComponent;
  let fixture: ComponentFixture<BtcresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtcresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
