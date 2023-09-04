import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bottleblowerpt2Component } from './bottleblowerpt2.component';

describe('Bottleblowerpt2Component', () => {
  let component: Bottleblowerpt2Component;
  let fixture: ComponentFixture<Bottleblowerpt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bottleblowerpt2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bottleblowerpt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
