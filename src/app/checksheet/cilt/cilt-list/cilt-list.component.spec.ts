import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiltListComponent } from './cilt-list.component';

describe('CiltListComponent', () => {
  let component: CiltListComponent;
  let fixture: ComponentFixture<CiltListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiltListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiltListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
