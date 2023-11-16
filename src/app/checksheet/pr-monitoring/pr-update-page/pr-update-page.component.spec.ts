import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrUpdatePageComponent } from './pr-update-page.component';

describe('PrUpdatePageComponent', () => {
  let component: PrUpdatePageComponent;
  let fixture: ComponentFixture<PrUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrUpdatePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
