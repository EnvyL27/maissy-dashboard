import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdmMFsbComponent } from './pdm-m-fsb.component';

describe('PdmMFsbComponent', () => {
  let component: PdmMFsbComponent;
  let fixture: ComponentFixture<PdmMFsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdmMFsbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdmMFsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
