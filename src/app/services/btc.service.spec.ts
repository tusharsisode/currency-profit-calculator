import { TestBed } from '@angular/core/testing';

import { BtcService } from './btc.service';

describe('BtcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BtcService = TestBed.get(BtcService);
    expect(service).toBeTruthy();
  });
});
