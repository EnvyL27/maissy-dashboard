import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPress1Component } from './filter-press1.component';

describe('FilterPress1Component', () => {
  let component: FilterPress1Component;
  let fixture: ComponentFixture<FilterPress1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPress1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPress1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
