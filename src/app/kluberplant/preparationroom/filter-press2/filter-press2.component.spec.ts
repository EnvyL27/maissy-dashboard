import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterPress2Component } from './filter-press2.component';

describe('FilterPress2Component', () => {
  let component: FilterPress2Component;
  let fixture: ComponentFixture<FilterPress2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterPress2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterPress2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
