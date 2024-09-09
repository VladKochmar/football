import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { playerDetailsResolver } from './player-details.resolver';

describe('playerDetailsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => playerDetailsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
