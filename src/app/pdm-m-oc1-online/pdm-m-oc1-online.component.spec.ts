import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdmMOc1OnlineComponent } from './pdm-m-oc1-online.component';

describe('PdmMOc1OnlineComponent', () => {
  let component: PdmMOc1OnlineComponent;
  let fixture: ComponentFixture<PdmMOc1OnlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdmMOc1OnlineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdmMOc1OnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
