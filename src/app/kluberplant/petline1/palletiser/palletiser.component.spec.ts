import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletiserComponent } from './palletiser.component';

describe('PalletiserComponent', () => {
  let component: PalletiserComponent;
  let fixture: ComponentFixture<PalletiserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalletiserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalletiserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
