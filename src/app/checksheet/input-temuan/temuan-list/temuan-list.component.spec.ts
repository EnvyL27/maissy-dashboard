import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemuanListComponent } from './temuan-list.component';

describe('TemuanListComponent', () => {
  let component: TemuanListComponent;
  let fixture: ComponentFixture<TemuanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemuanListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemuanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
