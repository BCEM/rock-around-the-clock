import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClockRenderComponent } from './clock-render.component';

describe('ClockRenderComponent', () => {
  let component: ClockRenderComponent;
  let fixture: ComponentFixture<ClockRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClockRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClockRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
