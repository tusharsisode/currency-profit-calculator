import { TestBed } from '@angular/core/testing';

import { LtcService } from './ltc.service';

describe('LtcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LtcService = TestBed.get(LtcService);
    expect(service).toBeTruthy();
  });
});
