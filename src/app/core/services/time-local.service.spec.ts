import { TestBed, inject } from '@angular/core/testing';

import { TimeLocalService } from './time-local.service';
import { IntervalService } from './interval.service';
import { MockIntervalService } from './mock-interval.service';

describe('TimeLocalService', () => {
  // tslint:disable-next-line:prefer-const
  let mockIntervalService: MockIntervalService = new MockIntervalService();
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TimeLocalService,
        { provide: IntervalService, useValue: mockIntervalService }
      ]
    });
  });

  it('should show correct time twice', inject([TimeLocalService], (service: TimeLocalService) => {
    const secondsInDay = 86400;
    let overlaps = 0;
    const ct = new Date();
    service.onTimeChanged().subscribe(t => {
      if ((ct.getHours()) === t.Hours && ct.getMinutes() === t.Mins && ct.getSeconds() === t.Sec) {
        overlaps++;
      }
    });

    for (let i = 0; i < secondsInDay; i++) {
      service.tick();
    }

    expect(overlaps === 2).toBeTruthy();
  }));

});
