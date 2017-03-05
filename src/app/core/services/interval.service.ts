import { Injectable } from '@angular/core';

@Injectable()
export class IntervalService {
  private interval;

  setInterval(time: number, callback: () => void) {
    this.interval = setInterval(callback, time);
  }

  clearInterval() {
    clearInterval(this.interval);
  }
}
