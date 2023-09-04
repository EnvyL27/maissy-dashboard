import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobopackerOffComponent } from './robopacker-off.component';

describe('RobopackerOffComponent', () => {
  let component: RobopackerOffComponent;
  let fixture: ComponentFixture<RobopackerOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RobopackerOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RobopackerOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
