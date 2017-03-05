import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    LocalClockComponent,
    LocalClockBrokenComponent,
    RemoteClockComponent,
    RemoteClockBrokenComponent
} from './clocks/index';

export const routes: Routes = [
    { path: '', component: LocalClockComponent },
    { path: 'local', component: LocalClockComponent },
    { path: 'local-broken', component: LocalClockBrokenComponent },
    { path: 'remote', component: RemoteClockComponent },
    { path: 'remote-broken', component: RemoteClockBrokenComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
