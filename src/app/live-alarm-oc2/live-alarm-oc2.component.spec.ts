import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAlarmOc2Component } from './live-alarm-oc2.component';

describe('LiveAlarmOc2Component', () => {
  let component: LiveAlarmOc2Component;
  let fixture: ComponentFixture<LiveAlarmOc2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveAlarmOc2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveAlarmOc2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
