import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KrmDashboardComponent } from './krm-dashboard.component';

describe('KrmDashboardComponent', () => {
  let component: KrmDashboardComponent;
  let fixture: ComponentFixture<KrmDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KrmDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KrmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
