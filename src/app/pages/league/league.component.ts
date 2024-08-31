import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { takeUntil } from 'rxjs';
import { LeagueStandings } from '../../models/league-standings.model';
import { StandingsComponent } from '../../components/standings/standings.component';

@Component({
  selector: 'app-league',
  standalone: true,
  imports: [StandingsComponent],
  templateUrl: './league.component.html',
  styleUrl: './league.component.scss',
})
export class LeagueComponent extends ClearObservable implements OnInit {
  standings: { league: LeagueStandings }[] | null = null;
  season: string | null = null;
  leagueId: string | null = null;

  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.standings = data['standings'];
    });
  }
}
