import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackRollerConveyorsComponent } from './pack-roller-conveyors.component';

describe('PackRollerConveyorsComponent', () => {
  let component: PackRollerConveyorsComponent;
  let fixture: ComponentFixture<PackRollerConveyorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackRollerConveyorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackRollerConveyorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
