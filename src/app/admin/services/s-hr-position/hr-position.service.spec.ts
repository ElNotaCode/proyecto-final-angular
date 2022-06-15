import { TestBed } from '@angular/core/testing';

import { HrPositionService } from './hr-position.service';

describe('HrPositionService', () => {
  let service: HrPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
