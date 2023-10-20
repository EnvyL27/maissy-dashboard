import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeuYear2Component } from './seu-year2.component';

describe('SeuYear2Component', () => {
  let component: SeuYear2Component;
  let fixture: ComponentFixture<SeuYear2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeuYear2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeuYear2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
