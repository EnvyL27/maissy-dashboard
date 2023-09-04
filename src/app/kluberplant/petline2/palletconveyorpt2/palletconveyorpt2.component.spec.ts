import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Palletconveyorpt2Component } from './palletconveyorpt2.component';

describe('Palletconveyorpt2Component', () => {
  let component: Palletconveyorpt2Component;
  let fixture: ComponentFixture<Palletconveyorpt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Palletconveyorpt2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Palletconveyorpt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
