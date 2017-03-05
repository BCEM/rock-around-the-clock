import { Injectable, Output, EventEmitter } from '@angular/core';

import { TimeInterface } from '../time-interface';
import { TimeModel } from '../models/time-model';
import { IntervalService } from './interval.service';

@Injectable()
export class TimeLocalBrokenService  implements TimeInterface {

  private timeChanged: EventEmitter<TimeModel> = new EventEmitter();
  private timeModel: TimeModel = new TimeModel();

  onTimeChanged(): EventEmitter<TimeModel> {
      return this.timeChanged;
  }

  constructor(private intervalService: IntervalService) {
    this.start();
  }

  public tick() {
    this.timeModel.Sec--;
    if (this.timeModel.Sec < 0) {
      this.timeModel.Sec = 59;
      this.tickM();
    }

    this.invokeTimeChanged();
  }

  private tickM() {
    this.timeModel.Mins--;
    if (this.timeModel.Mins < 0) {
      this.timeModel.Mins = 59;
      this.tickH();
    }
  }

  private tickH() {
    this.timeModel.Hours--;
    if (this.timeModel.Hours < 0) {
      this.timeModel.Hours = 11;
    }
  }

  private start() {
    this.intervalService.setInterval(10, this.tick.bind(this));
  }

  private invokeTimeChanged() {
    this.timeChanged.emit(this.timeModel);
  }
}
