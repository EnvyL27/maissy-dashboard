import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeuYearComponent } from './seu-year.component';

describe('SeuYearComponent', () => {
  let component: SeuYearComponent;
  let fixture: ComponentFixture<SeuYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeuYearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeuYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
