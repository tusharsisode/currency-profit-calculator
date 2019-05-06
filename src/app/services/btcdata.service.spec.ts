import { TestBed } from '@angular/core/testing';

import { BtcdataService } from './btcdata.service';

describe('BtcdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BtcdataService = TestBed.get(BtcdataService);
    expect(service).toBeTruthy();
  });
});
