import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShrinkTrayComponent } from './shrink-tray.component';

describe('ShrinkTrayComponent', () => {
  let component: ShrinkTrayComponent;
  let fixture: ComponentFixture<ShrinkTrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShrinkTrayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShrinkTrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
