import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmMOci1Component } from './am-m-oci1.component';

describe('AmMOci1Component', () => {
  let component: AmMOci1Component;
  let fixture: ComponentFixture<AmMOci1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmMOci1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmMOci1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
