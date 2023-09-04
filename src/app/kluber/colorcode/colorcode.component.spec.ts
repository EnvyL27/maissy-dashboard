import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorcodeComponent } from './colorcode.component';

describe('ColorcodeComponent', () => {
  let component: ColorcodeComponent;
  let fixture: ComponentFixture<ColorcodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorcodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorcodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
