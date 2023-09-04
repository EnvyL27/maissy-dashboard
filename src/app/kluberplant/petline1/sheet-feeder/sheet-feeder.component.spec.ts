import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheetFeederComponent } from './sheet-feeder.component';

describe('SheetFeederComponent', () => {
  let component: SheetFeederComponent;
  let fixture: ComponentFixture<SheetFeederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SheetFeederComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SheetFeederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
