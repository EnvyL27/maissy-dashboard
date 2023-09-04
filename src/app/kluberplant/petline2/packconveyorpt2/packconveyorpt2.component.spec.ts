import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Packconveyorpt2Component } from './packconveyorpt2.component';

describe('Packconveyorpt2Component', () => {
  let component: Packconveyorpt2Component;
  let fixture: ComponentFixture<Packconveyorpt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Packconveyorpt2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Packconveyorpt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
