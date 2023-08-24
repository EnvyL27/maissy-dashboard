import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdmMOci1Component } from './pdm-m-oci1.component';

describe('PdmMOci1Component', () => {
  let component: PdmMOci1Component;
  let fixture: ComponentFixture<PdmMOci1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdmMOci1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdmMOci1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
