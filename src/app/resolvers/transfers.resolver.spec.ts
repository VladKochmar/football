import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { transfersResolver } from './transfers.resolver';

describe('transfersResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => transfersResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
