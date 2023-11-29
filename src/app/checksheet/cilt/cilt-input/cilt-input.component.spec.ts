import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiltInputComponent } from './cilt-input.component';

describe('CiltInputComponent', () => {
  let component: CiltInputComponent;
  let fixture: ComponentFixture<CiltInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiltInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiltInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
