import { EventEmitter } from '@angular/core';
import { TimeModel } from './models/time-model';

export interface TimeInterface {
    onTimeChanged(): EventEmitter<TimeModel>;
}
