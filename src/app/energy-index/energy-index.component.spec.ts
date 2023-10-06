import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyIndexComponent } from './energy-index.component';

describe('EnergyIndexComponent', () => {
  let component: EnergyIndexComponent;
  let fixture: ComponentFixture<EnergyIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyIndexComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
