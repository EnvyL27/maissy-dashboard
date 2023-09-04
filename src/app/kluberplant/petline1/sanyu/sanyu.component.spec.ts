import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SanyuComponent } from './sanyu.component';

describe('SanyuComponent', () => {
  let component: SanyuComponent;
  let fixture: ComponentFixture<SanyuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SanyuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SanyuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
