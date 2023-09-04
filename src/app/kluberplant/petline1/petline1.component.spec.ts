import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Petline1Component } from './petline1.component';

describe('Petline1Component', () => {
  let component: Petline1Component;
  let fixture: ComponentFixture<Petline1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Petline1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Petline1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
