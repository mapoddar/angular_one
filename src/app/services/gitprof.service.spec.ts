import { TestBed } from '@angular/core/testing';

import { GitprofService } from './gitprof.service';

describe('GitprofService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitprofService = TestBed.get(GitprofService);
    expect(service).toBeTruthy();
  });
});
