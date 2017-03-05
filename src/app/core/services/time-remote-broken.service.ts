import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';

import { TimeInterface } from '../time-interface';
import { TimeModel } from '../models/time-model';
import { IntervalService } from './interval.service';

@Injectable()
export class TimeRemoteBrokenService implements TimeInterface {

  private timeChanged: EventEmitter<TimeModel> = new EventEmitter();

  onTimeChanged(): EventEmitter<TimeModel> {
    return this.timeChanged;
  }

  constructor(private http: Http,
    private intervalService: IntervalService) {
    this.intervalService.setInterval(1000, this.start.bind(this));
  }

  private start() {
    this.http.get('/api/timebroken')
      .subscribe(this.getData.bind(this), (e) => console.log(e));
  }

  private getData(res: Response) {
    const t: TimeModel = res.json();
    this.invokeTimeChanged(t);
  }

  private invokeTimeChanged(timeModel: TimeModel) {
    this.timeChanged.emit(timeModel);
  }
}
