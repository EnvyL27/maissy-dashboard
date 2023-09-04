import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pet1AgitatorsComponent } from './pet1-agitators.component';

describe('Pet1AgitatorsComponent', () => {
  let component: Pet1AgitatorsComponent;
  let fixture: ComponentFixture<Pet1AgitatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pet1AgitatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pet1AgitatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
