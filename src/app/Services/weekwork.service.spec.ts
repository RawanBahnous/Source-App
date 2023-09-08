import { TestBed } from '@angular/core/testing';

import { WeekworkService } from './weekwork.service';

describe('WeekworkService', () => {
  let service: WeekworkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeekworkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
