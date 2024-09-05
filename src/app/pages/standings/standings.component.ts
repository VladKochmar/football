import { Component, OnInit } from '@angular/core';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { LeagueStandings } from '../../models/league-standings.model';
import { takeUntil } from 'rxjs';
import { StandingsComponent } from '../../components/standings/standings.component';
import { Store } from '@ngrx/store';
import {
  selectLeagueStandings,
  selectLoadingStandings,
} from '../../store/selectors';
import { CommonModule } from '@angular/common';
import { SkeletonTableComponent } from '../../components/skeleton-table/skeleton-table.component';

@Component({
  selector: 'app-standings-page',
  standalone: true,
  imports: [CommonModule, StandingsComponent, SkeletonTableComponent],
  templateUrl: './standings.component.html',
  styleUrl: './standings.component.scss',
})
export class StandingsPage extends ClearObservable implements OnInit {
  standings: { league: LeagueStandings }[] | null = null;

  constructor(private store: Store) {
    super();
  }

  selectedLeagueStandings$ = this.store.select(selectLeagueStandings);
  selectedLoading$ = this.store.select(selectLoadingStandings);

  ngOnInit(): void {
    this.selectedLeagueStandings$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.standings = data;
      });
  }
}
