import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtcsearchComponent } from './etcsearch.component';

describe('EtcsearchComponent', () => {
  let component: EtcsearchComponent;
  let fixture: ComponentFixture<EtcsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtcsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtcsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
