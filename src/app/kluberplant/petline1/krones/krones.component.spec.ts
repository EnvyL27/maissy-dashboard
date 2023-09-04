import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KronesComponent } from './krones.component';

describe('KronesComponent', () => {
  let component: KronesComponent;
  let fixture: ComponentFixture<KronesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KronesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KronesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
