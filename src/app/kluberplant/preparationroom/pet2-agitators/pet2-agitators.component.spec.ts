import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pet2AgitatorsComponent } from './pet2-agitators.component';

describe('Pet2AgitatorsComponent', () => {
  let component: Pet2AgitatorsComponent;
  let fixture: ComponentFixture<Pet2AgitatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Pet2AgitatorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Pet2AgitatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
