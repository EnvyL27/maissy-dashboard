import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmMFsbComponent } from './am-m-fsb.component';

describe('AmMFsbComponent', () => {
  let component: AmMFsbComponent;
  let fixture: ComponentFixture<AmMFsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmMFsbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmMFsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
