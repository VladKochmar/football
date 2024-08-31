import { TestBed } from '@angular/core/testing';

import { LeagueComponent } from './league.component';
import { StandingsComponent } from '../../components/standings/standings.component';
import { mockStandings } from '../../../data/mock-data';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('LeagueComponent', () => {
  let component: LeagueComponent;

  const mockData = {
    standings: mockStandings,
  };

  const mockActivatedRoute = {
    data: of(mockData),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandingsComponent],
      providers: [
        LeagueComponent,
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
    }).compileComponents();

    component = TestBed.inject(LeagueComponent);
  });

  it('should create the page instance', () => {
    expect(component).toBeTruthy();
  });
});
