import { TestBed } from '@angular/core/testing';

import { OnAuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: OnAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OnAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});