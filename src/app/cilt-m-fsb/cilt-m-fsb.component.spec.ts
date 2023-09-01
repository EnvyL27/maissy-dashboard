import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CiltMFsbComponent } from './cilt-m-fsb.component';

describe('CiltMFsbComponent', () => {
  let component: CiltMFsbComponent;
  let fixture: ComponentFixture<CiltMFsbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiltMFsbComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CiltMFsbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
