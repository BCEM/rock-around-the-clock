import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { ClockRenderComponent } from '../../clock-render-component/clock-render.component';
import { TimeModel } from '../../core/models/time-model';
import { TimeLocalService } from '../../core/services/time-local.service';

@Component({
  selector: 'app-local-clock',
  templateUrl: './local-clock.component.html',
  styleUrls: ['./local-clock.component.css'],
  providers: [TimeLocalService]
})
export class LocalClockComponent implements AfterViewInit {

  @ViewChild(ClockRenderComponent)
  private clock: ClockRenderComponent;

  constructor(private timer: TimeLocalService) { }

  ngAfterViewInit(): void {
    this.timer.onTimeChanged().subscribe(t => this.draw(t));
  }

  private draw(t: TimeModel) {
    if (this.clock) {
      this.clock.drawClock(t.Hours, t.Mins, t.Sec);
    }
  }
}
