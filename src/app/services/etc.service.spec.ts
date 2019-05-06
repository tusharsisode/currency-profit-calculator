import { TestBed } from '@angular/core/testing';

import { EtcService } from './etc.service';

describe('EtcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtcService = TestBed.get(EtcService);
    expect(service).toBeTruthy();
  });
});
