import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationroomComponent } from './preparationroom.component';

describe('PreparationroomComponent', () => {
  let component: PreparationroomComponent;
  let fixture: ComponentFixture<PreparationroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparationroomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreparationroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
