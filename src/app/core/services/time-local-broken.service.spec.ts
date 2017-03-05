import { TestBed, inject } from '@angular/core/testing';

import { TimeLocalBrokenService } from './time-local-broken.service';
import { IntervalService } from './interval.service';
import { MockIntervalService } from './mock-interval.service';

describe('TimeLocalBrokenService', () => {
  // tslint:disable-next-line:prefer-const
  let mockIntervalService: MockIntervalService = new MockIntervalService();
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TimeLocalBrokenService,
        { provide: IntervalService, useValue: mockIntervalService }
      ]
    });
  });

  it('should show correct time twice', inject([TimeLocalBrokenService], (service: TimeLocalBrokenService) => {
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
