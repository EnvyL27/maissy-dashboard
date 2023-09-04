import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Injectionmolderpt2Component } from './injectionmolderpt2.component';

describe('Injectionmolderpt2Component', () => {
  let component: Injectionmolderpt2Component;
  let fixture: ComponentFixture<Injectionmolderpt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Injectionmolderpt2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Injectionmolderpt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
