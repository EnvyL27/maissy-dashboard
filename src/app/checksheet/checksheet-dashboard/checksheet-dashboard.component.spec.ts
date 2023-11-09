import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecksheetDashboardComponent } from './checksheet-dashboard.component';

describe('ChecksheetDashboardComponent', () => {
  let component: ChecksheetDashboardComponent;
  let fixture: ComponentFixture<ChecksheetDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChecksheetDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChecksheetDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
