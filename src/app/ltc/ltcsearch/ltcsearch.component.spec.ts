import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LtcsearchComponent } from './ltcsearch.component';

describe('LtcsearchComponent', () => {
  let component: LtcsearchComponent;
  let fixture: ComponentFixture<LtcsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LtcsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LtcsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
