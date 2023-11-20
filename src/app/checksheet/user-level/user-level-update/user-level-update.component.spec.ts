import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLevelUpdateComponent } from './user-level-update.component';

describe('UserLevelUpdateComponent', () => {
  let component: UserLevelUpdateComponent;
  let fixture: ComponentFixture<UserLevelUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLevelUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLevelUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
