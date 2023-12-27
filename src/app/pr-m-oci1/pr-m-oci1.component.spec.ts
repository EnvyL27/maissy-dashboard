import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrMOci1Component } from './pr-m-oci1.component';

describe('PrMOci1Component', () => {
  let component: PrMOci1Component;
  let fixture: ComponentFixture<PrMOci1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrMOci1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrMOci1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
