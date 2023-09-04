import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottleShowerComponent } from './bottle-shower.component';

describe('BottleShowerComponent', () => {
  let component: BottleShowerComponent;
  let fixture: ComponentFixture<BottleShowerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottleShowerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottleShowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
