import { Component, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';

import { IntervalService } from './core/services/interval.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [IntervalService]
})
export class AppComponent {
  constructor() {
  }
}
