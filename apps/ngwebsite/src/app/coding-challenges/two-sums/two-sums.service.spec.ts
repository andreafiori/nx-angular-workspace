import { TestBed } from '@angular/core/testing';

import { TwoSumsService } from './two-sums.service';

describe('TwoSumsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TwoSumsService = TestBed.get(TwoSumsService);
    expect(service).toBeTruthy();
  });
});
