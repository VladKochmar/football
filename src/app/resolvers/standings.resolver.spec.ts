import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { standingsResolver } from './standings.resolver';

describe('standingsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => standingsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
