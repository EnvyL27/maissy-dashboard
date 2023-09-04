import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DpcPumpComponent } from './dpc-pump.component';

describe('DpcPumpComponent', () => {
  let component: DpcPumpComponent;
  let fixture: ComponentFixture<DpcPumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DpcPumpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DpcPumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
