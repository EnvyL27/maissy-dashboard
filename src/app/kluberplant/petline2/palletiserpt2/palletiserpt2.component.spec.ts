import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Palletiserpt2Component } from './palletiserpt2.component';

describe('Palletiserpt2Component', () => {
  let component: Palletiserpt2Component;
  let fixture: ComponentFixture<Palletiserpt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Palletiserpt2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Palletiserpt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
