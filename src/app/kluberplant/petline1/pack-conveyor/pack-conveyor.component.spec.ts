import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackConveyorComponent } from './pack-conveyor.component';

describe('PackConveyorComponent', () => {
  let component: PackConveyorComponent;
  let fixture: ComponentFixture<PackConveyorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackConveyorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackConveyorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
