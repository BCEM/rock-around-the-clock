import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalClockBrokenComponent } from './local-clock-broken.component';
import { ClockRenderComponent } from '../../clock-render-component/clock-render.component';
import { IntervalService } from '../../core/services/interval.service';
import { MockIntervalService } from '../../core/services/mock-interval.service';

describe('LocalClockBrokenComponent', () => {
  let component: LocalClockBrokenComponent;
  let fixture: ComponentFixture<LocalClockBrokenComponent>;
  // tslint:disable-next-line:prefer-const
  let mockIntervalService: MockIntervalService = new MockIntervalService();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalClockBrokenComponent, ClockRenderComponent ],
      providers: [
        { provide: IntervalService, useValue: mockIntervalService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalClockBrokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
