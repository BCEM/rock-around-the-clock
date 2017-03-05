import { Injectable } from '@angular/core';

@Injectable()
export class MockIntervalService {

  private callback;

  clearInterval = jasmine.createSpy('clearInterval');

  setInterval(time: number, callback: () => void): any {
    this.callback = callback;
    return null;
  }

  tick() {
    this.callback();
  }
}
