import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreaseComponent } from './grease.component';

describe('GreaseComponent', () => {
  let component: GreaseComponent;
  let fixture: ComponentFixture<GreaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
