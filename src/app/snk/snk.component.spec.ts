import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnkComponent } from './snk.component';

describe('SnkComponent', () => {
  let component: SnkComponent;
  let fixture: ComponentFixture<SnkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
