import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalletConveyorComponent } from './pallet-conveyor.component';

describe('PalletConveyorComponent', () => {
  let component: PalletConveyorComponent;
  let fixture: ComponentFixture<PalletConveyorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalletConveyorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalletConveyorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
