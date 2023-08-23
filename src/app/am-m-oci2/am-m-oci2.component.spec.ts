import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmMOci2Component } from './am-m-oci2.component';

describe('AmMOci2Component', () => {
  let component: AmMOci2Component;
  let fixture: ComponentFixture<AmMOci2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmMOci2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmMOci2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
