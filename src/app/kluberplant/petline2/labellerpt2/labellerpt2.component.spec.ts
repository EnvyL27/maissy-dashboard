import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Labellerpt2Component } from './labellerpt2.component';

describe('Labellerpt2Component', () => {
  let component: Labellerpt2Component;
  let fixture: ComponentFixture<Labellerpt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Labellerpt2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Labellerpt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
