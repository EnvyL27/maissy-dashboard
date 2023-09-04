import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerConveyorOffComponent } from './container-conveyor-off.component';

describe('ContainerConveyorOffComponent', () => {
  let component: ContainerConveyorOffComponent;
  let fixture: ComponentFixture<ContainerConveyorOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerConveyorOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerConveyorOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
