import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conveyorpt2Component } from './conveyorpt2.component';

describe('Conveyorpt2Component', () => {
  let component: Conveyorpt2Component;
  let fixture: ComponentFixture<Conveyorpt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Conveyorpt2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conveyorpt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
