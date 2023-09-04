import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyboxOffComponent } from './emptybox-off.component';

describe('EmptyboxOffComponent', () => {
  let component: EmptyboxOffComponent;
  let fixture: ComponentFixture<EmptyboxOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyboxOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyboxOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
