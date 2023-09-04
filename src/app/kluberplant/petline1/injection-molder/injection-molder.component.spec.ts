import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectionMolderComponent } from './injection-molder.component';

describe('InjectionMolderComponent', () => {
  let component: InjectionMolderComponent;
  let fixture: ComponentFixture<InjectionMolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InjectionMolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InjectionMolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
