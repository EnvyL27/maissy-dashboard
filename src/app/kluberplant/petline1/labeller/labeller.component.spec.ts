import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabellerComponent } from './labeller.component';

describe('LabellerComponent', () => {
  let component: LabellerComponent;
  let fixture: ComponentFixture<LabellerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabellerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
