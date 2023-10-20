import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeuDailyComponent } from './seu-daily.component';

describe('SeuDailyComponent', () => {
  let component: SeuDailyComponent;
  let fixture: ComponentFixture<SeuDailyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeuDailyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeuDailyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
