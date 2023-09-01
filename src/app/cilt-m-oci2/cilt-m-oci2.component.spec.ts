import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiltMOci2Component } from './cilt-m-oci2.component';

describe('CiltMOci2Component', () => {
  let component: CiltMOci2Component;
  let fixture: ComponentFixture<CiltMOci2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiltMOci2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiltMOci2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
