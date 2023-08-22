import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdmDashboardComponent } from './pdm-dashboard.component';

describe('PdmDashboardComponent', () => {
  let component: PdmDashboardComponent;
  let fixture: ComponentFixture<PdmDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdmDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
