import { TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [HomeComponent],
    }).compileComponents();

    component = TestBed.inject(HomeComponent);
  });

  it('should create the page instance', () => {
    expect(component).toBeTruthy();
  });
});
