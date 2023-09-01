import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CostMFsbComponent } from './cost-m-fsb.component';

describe('CostMFsbComponent', () => {
  let component: CostMFsbComponent;
  let fixture: ComponentFixture<CostMFsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CostMFsbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CostMFsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
