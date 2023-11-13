import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrInputPageComponent } from './pr-input-page.component';

describe('PrInputPageComponent', () => {
  let component: PrInputPageComponent;
  let fixture: ComponentFixture<PrInputPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrInputPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrInputPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
