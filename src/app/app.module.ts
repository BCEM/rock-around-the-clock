import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdlModule } from 'angular2-mdl';

import { AppComponent } from './app.component';
import { routing } from './app.routes';
import { ClockRenderComponent } from './clock-render-component/clock-render.component';
import { LocalClockComponent } from './clocks/local-clock/local-clock.component';
import { LocalClockBrokenComponent } from './clocks/local-clock-broken/local-clock-broken.component';
import { RemoteClockComponent } from './clocks/remote-clock/remote-clock.component';
import { RemoteClockBrokenComponent } from './clocks/remote-clock-broken/remote-clock-broken.component';

@NgModule({
  declarations: [
    AppComponent,
    ClockRenderComponent,
    LocalClockComponent,
    LocalClockBrokenComponent,
    RemoteClockComponent,
    RemoteClockBrokenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdlModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
