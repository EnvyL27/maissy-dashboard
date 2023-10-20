import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyWeeklyReportComponent } from './energy-weekly-report.component';

describe('EnergyWeeklyReportComponent', () => {
  let component: EnergyWeeklyReportComponent;
  let fixture: ComponentFixture<EnergyWeeklyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyWeeklyReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyWeeklyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
