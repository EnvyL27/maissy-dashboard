import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostMOci1Component } from './cost-m-oci1.component';

describe('CostMOci1Component', () => {
  let component: CostMOci1Component;
  let fixture: ComponentFixture<CostMOci1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostMOci1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostMOci1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
