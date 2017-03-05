import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { ClockRenderComponent } from '../../clock-render-component/clock-render.component';
import { TimeModel } from '../../core/models/time-model';
import { TimeLocalBrokenService } from '../../core/services/time-local-broken.service';

@Component({
  selector: 'app-local-clock-broken',
  templateUrl: './local-clock-broken.component.html',
  styleUrls: ['./local-clock-broken.component.css'],
  providers: [TimeLocalBrokenService]
})
export class LocalClockBrokenComponent implements AfterViewInit {

  @ViewChild(ClockRenderComponent)
  private clock: ClockRenderComponent;

  constructor(private timer: TimeLocalBrokenService) { }

  ngAfterViewInit(): void {
    this.timer.onTimeChanged().subscribe(t => this.draw(t));
  }

  private draw(t: TimeModel) {
    if (this.clock) {
      this.clock.drawClock(t.Hours, t.Mins, t.Sec);
    }
  }
}
