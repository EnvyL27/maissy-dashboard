import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fillerpt2Component } from './fillerpt2.component';

describe('Fillerpt2Component', () => {
  let component: Fillerpt2Component;
  let fixture: ComponentFixture<Fillerpt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Fillerpt2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fillerpt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
