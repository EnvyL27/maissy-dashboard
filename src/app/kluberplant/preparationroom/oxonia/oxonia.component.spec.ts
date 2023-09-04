import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OxoniaComponent } from './oxonia.component';

describe('OxoniaComponent', () => {
  let component: OxoniaComponent;
  let fixture: ComponentFixture<OxoniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OxoniaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OxoniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
