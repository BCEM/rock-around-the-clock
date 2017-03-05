import { TestBed, inject } from '@angular/core/testing';

import { MockIntervalService } from './mock-interval.service';

describe('MockIntervalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MockIntervalService]
    });
  });

  it('should ...', inject([MockIntervalService], (service: MockIntervalService) => {
    expect(service).toBeTruthy();
  }));
});
