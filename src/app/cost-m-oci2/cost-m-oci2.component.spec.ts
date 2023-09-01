import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostMOci2Component } from './cost-m-oci2.component';

describe('CostMOci2Component', () => {
  let component: CostMOci2Component;
  let fixture: ComponentFixture<CostMOci2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostMOci2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostMOci2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
