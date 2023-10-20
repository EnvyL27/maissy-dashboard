import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyDailyReportComponent } from './energy-daily-report.component';

describe('EnergyDailyReportComponent', () => {
  let component: EnergyDailyReportComponent;
  let fixture: ComponentFixture<EnergyDailyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyDailyReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyDailyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
