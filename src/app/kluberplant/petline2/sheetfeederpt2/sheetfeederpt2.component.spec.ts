import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sheetfeederpt2Component } from './sheetfeederpt2.component';

describe('Sheetfeederpt2Component', () => {
  let component: Sheetfeederpt2Component;
  let fixture: ComponentFixture<Sheetfeederpt2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Sheetfeederpt2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sheetfeederpt2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
