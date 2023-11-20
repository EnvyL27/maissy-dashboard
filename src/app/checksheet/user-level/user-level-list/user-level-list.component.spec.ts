import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLevelListComponent } from './user-level-list.component';

describe('UserLevelListComponent', () => {
  let component: UserLevelListComponent;
  let fixture: ComponentFixture<UserLevelListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLevelListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLevelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
