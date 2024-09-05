import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { currentLeagueResolver } from './current-league.resolver';

describe('currentLeagueResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => currentLeagueResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
