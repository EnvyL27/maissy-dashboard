import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemuanInputComponent } from './temuan-input.component';

describe('TemuanInputComponent', () => {
  let component: TemuanInputComponent;
  let fixture: ComponentFixture<TemuanInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemuanInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemuanInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
