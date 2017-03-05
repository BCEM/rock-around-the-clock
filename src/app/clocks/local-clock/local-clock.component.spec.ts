import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalClockComponent } from './local-clock.component';
import { ClockRenderComponent } from '../../clock-render-component/clock-render.component';
import { IntervalService } from '../../core/services/interval.service';
import { MockIntervalService } from '../../core/services/mock-interval.service';

describe('LocalClockComponent', () => {
  let component: LocalClockComponent;
  let fixture: ComponentFixture<LocalClockComponent>;
  // tslint:disable-next-line:prefer-const
  let mockIntervalService: MockIntervalService = new MockIntervalService();
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalClockComponent, ClockRenderComponent ],
      providers: [
        { provide: IntervalService, useValue: mockIntervalService },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalClockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
