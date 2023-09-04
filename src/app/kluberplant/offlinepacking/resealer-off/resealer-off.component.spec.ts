import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResealerOffComponent } from './resealer-off.component';

describe('ResealerOffComponent', () => {
  let component: ResealerOffComponent;
  let fixture: ComponentFixture<ResealerOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResealerOffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResealerOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
