import { TestBed } from '@angular/core/testing';

import { EtcdataService } from './etcdata.service';

describe('EtcdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EtcdataService = TestBed.get(EtcdataService);
    expect(service).toBeTruthy();
  });
});
