import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityEndComponent } from './activity-end.component';

describe('ActivityEndComponent', () => {
  let component: ActivityEndComponent;
  let fixture: ComponentFixture<ActivityEndComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityEndComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivityEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
