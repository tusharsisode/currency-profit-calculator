import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtcresultComponent } from './etcresult.component';

describe('EtcresultComponent', () => {
  let component: EtcresultComponent;
  let fixture: ComponentFixture<EtcresultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtcresultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtcresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
