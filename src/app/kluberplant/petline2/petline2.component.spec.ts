import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Petline2Component } from './petline2.component';

describe('Petline2Component', () => {
  let component: Petline2Component;
  let fixture: ComponentFixture<Petline2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Petline2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Petline2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
