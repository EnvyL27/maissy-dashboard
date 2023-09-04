import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sanyudividerpt2Component } from './sanyudividerpt2.component';

describe('Sanyudividerpt2Component', () => {
  let component: Sanyudividerpt2Component;
  let fixture: ComponentFixture<Sanyudividerpt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sanyudividerpt2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sanyudividerpt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
