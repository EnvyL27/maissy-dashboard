import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerConveyorComponent } from './container-conveyor.component';

describe('ContainerConveyorComponent', () => {
  let component: ContainerConveyorComponent;
  let fixture: ComponentFixture<ContainerConveyorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerConveyorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerConveyorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
