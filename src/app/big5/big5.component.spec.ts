import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Big5Component } from './big5.component';

describe('Big5Component', () => {
  let component: Big5Component;
  let fixture: ComponentFixture<Big5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Big5Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Big5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
