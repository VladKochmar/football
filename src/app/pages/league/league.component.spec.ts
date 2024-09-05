import { TestBed } from '@angular/core/testing';

import { LeagueComponent } from './league.component';
import { StandingsComponent } from '../../components/standings/standings.component';
import { RouterLink, RouterOutlet } from '@angular/router';

describe('LeagueComponent', () => {
  let component: LeagueComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandingsComponent],
      providers: [LeagueComponent, RouterOutlet, RouterLink],
    }).compileComponents();

    component = TestBed.inject(LeagueComponent);
  });

  it('should create the page instance', () => {
    expect(component).toBeTruthy();
  });
});
