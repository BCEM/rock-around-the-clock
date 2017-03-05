import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { ClockRenderComponent } from '../../clock-render-component/clock-render.component';
import { TimeModel } from '../../core/models/time-model';
import { TimeRemoteService } from '../../core/services/time-remote.service';

@Component({
  selector: 'app-remote-clock',
  templateUrl: './remote-clock.component.html',
  styleUrls: ['./remote-clock.component.css'],
  providers: [TimeRemoteService]
})
export class RemoteClockComponent implements AfterViewInit {

  @ViewChild(ClockRenderComponent)
  private clock: ClockRenderComponent;

  constructor(private timer: TimeRemoteService) { }

  ngAfterViewInit(): void {
    this.timer.onTimeChanged().subscribe(t => this.draw(t));
  }

  private draw(t: TimeModel) {
    if (this.clock) {
      this.clock.drawClock(t.Hours, t.Mins, t.Sec);
    }
  }
}
