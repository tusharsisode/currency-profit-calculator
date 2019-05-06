import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtcresultComponent } from './ltcresult.component';

describe('LtcresultComponent', () => {
  let component: LtcresultComponent;
  let fixture: ComponentFixture<LtcresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtcresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtcresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
