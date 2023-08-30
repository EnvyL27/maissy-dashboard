import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdmMOci2Component } from './pdm-m-oci2.component';

describe('PdmMOci2Component', () => {
  let component: PdmMOci2Component;
  let fixture: ComponentFixture<PdmMOci2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdmMOci2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdmMOci2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
