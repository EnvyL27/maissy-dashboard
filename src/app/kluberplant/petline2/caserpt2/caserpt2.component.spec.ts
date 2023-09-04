import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Caserpt2Component } from './caserpt2.component';

describe('Caserpt2Component', () => {
  let component: Caserpt2Component;
  let fixture: ComponentFixture<Caserpt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Caserpt2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Caserpt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
