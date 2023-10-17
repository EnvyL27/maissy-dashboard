import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyUsageYearlyComponent } from './energy-usage-yearly.component';

describe('EnergyUsageYearlyComponent', () => {
  let component: EnergyUsageYearlyComponent;
  let fixture: ComponentFixture<EnergyUsageYearlyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyUsageYearlyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyUsageYearlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
