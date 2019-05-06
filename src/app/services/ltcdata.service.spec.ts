import { TestBed } from '@angular/core/testing';

import { LtcdataService } from './ltcdata.service';

describe('LtcdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LtcdataService = TestBed.get(LtcdataService);
    expect(service).toBeTruthy();
  });
});
