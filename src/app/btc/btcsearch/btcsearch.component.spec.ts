import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BtcsearchComponent } from './btcsearch.component';

describe('BtcsearchComponent', () => {
  let component: BtcsearchComponent;
  let fixture: ComponentFixture<BtcsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BtcsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BtcsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
