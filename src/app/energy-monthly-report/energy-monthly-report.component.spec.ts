import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyMonthlyReportComponent } from './energy-monthly-report.component';

describe('EnergyMonthlyReportComponent', () => {
  let component: EnergyMonthlyReportComponent;
  let fixture: ComponentFixture<EnergyMonthlyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyMonthlyReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyMonthlyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
