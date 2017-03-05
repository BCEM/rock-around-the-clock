import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MdlModule } from 'angular2-mdl';

import { AppComponent } from './app.component';
import { ClockRenderComponent } from './clock-render-component/clock-render.component';
import { MockIntervalService } from './core/services/mock-interval.service';
import { IntervalService } from './core/services/interval.service';

describe('AppComponent', () => {
  // tslint:disable-next-line:prefer-const
  let mockIntervalService: MockIntervalService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdlModule,
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        ClockRenderComponent
      ],
      providers: [
        { provide: IntervalService, useValue: mockIntervalService },
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  // it(`should have as title 'app works!'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('app works!');
  // }));

  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('app works!');
  // }));
});
