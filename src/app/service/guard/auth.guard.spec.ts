import { TestBed } from '@angular/core/testing';

import { OutAuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: OutAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OutAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
