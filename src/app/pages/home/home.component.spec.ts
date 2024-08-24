import { TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { LeaguesListComponent } from '../../components/leagues-list/leagues-list.component';
import { TopTableComponent } from '../../components/top-table/top-table.component';
import { mockTopScorers } from '../../../data/mock-data';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;

  const mockData = {
    contributorsData: [mockTopScorers, mockTopScorers],
  };

  const mockActivatedRoute = {
    data: of(mockData),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaguesListComponent, TopTableComponent],
      providers: [
        HomeComponent,
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    component = TestBed.inject(HomeComponent);
  });

  it('should create the page instance', () => {
    expect(component).toBeTruthy();
  });
});
