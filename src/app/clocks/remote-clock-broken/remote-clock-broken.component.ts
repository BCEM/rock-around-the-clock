import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { ClockRenderComponent } from '../../clock-render-component/clock-render.component';
import { TimeModel } from '../../core/models/time-model';
import { TimeRemoteBrokenService } from '../../core/services/time-remote-broken.service';

@Component({
  selector: 'app-remote-clock-broken',
  templateUrl: './remote-clock-broken.component.html',
  styleUrls: ['./remote-clock-broken.component.css'],
  providers: [TimeRemoteBrokenService]
})
export class RemoteClockBrokenComponent implements AfterViewInit {

  @ViewChild(ClockRenderComponent)
  private clock: ClockRenderComponent;

  constructor(private timer: TimeRemoteBrokenService) { }

  ngAfterViewInit(): void {
    this.timer.onTimeChanged().subscribe(t => this.draw(t));
  }

  private draw(t: TimeModel) {
    if (this.clock) {
      this.clock.drawClock(t.Hours, t.Mins, t.Sec);
    }
  }
}
