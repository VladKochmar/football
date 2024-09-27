import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { teamDetailsResolver } from './team-details.resolver';

describe('teamDetailsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => teamDetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
