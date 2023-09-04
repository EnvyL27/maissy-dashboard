import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceproductComponent } from './maintenanceproduct.component';

describe('MaintenanceproductComponent', () => {
  let component: MaintenanceproductComponent;
  let fixture: ComponentFixture<MaintenanceproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaintenanceproductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaintenanceproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
