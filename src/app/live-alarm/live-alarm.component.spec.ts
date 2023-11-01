import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveAlarmComponent } from './live-alarm.component';

describe('LiveAlarmComponent', () => {
  let component: LiveAlarmComponent;
  let fixture: ComponentFixture<LiveAlarmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveAlarmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveAlarmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
