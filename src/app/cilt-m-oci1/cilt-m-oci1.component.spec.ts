import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiltMOci1Component } from './cilt-m-oci1.component';

describe('CiltMOci1Component', () => {
  let component: CiltMOci1Component;
  let fixture: ComponentFixture<CiltMOci1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiltMOci1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiltMOci1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
