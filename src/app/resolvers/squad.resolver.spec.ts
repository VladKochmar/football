import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { squadResolver } from './squad.resolver';

describe('squadResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => squadResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
