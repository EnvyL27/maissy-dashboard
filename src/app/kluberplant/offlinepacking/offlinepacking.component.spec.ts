import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflinepackingComponent } from './offlinepacking.component';

describe('OfflinepackingComponent', () => {
  let component: OfflinepackingComponent;
  let fixture: ComponentFixture<OfflinepackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfflinepackingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OfflinepackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
