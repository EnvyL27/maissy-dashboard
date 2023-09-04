import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackConveyorOffComponent } from './pack-conveyor-off.component';

describe('PackConveyorOffComponent', () => {
  let component: PackConveyorOffComponent;
  let fixture: ComponentFixture<PackConveyorOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackConveyorOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackConveyorOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
