import { Injectable } from '@angular/core';
import { FootballService } from '../services/football/football.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as FootballActions from './actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { HumansService } from '../services/humans/humans.service';

@Injectable()
export class FootballEffects {
  constructor(
    private actions$: Actions,
    private footballService: FootballService,
    private humansService: HumansService,
  ) {}

  loadLeagues$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FootballActions.loadLeagues),
      switchMap(() => {
        return this.footballService.loadLeagues().pipe(
          map((leagues) => {
            return FootballActions.loadLeaguesSuccess({
              leagues: leagues.response,
            });
          }),
          catchError((error) =>
            of(FootballActions.loadLeaguesFailure({ error })),
          ),
        );
      }),
    ),
  );

  loadTopScorers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FootballActions.loadTopScorers),
      switchMap(({ leagueId, season }) => {
        return this.humansService.loadTopScorers(leagueId, season).pipe(
          map((topScorers) => {
            return FootballActions.loadTopScorersSuccess({
              topScorers: topScorers.response,
            });
          }),
          catchError((error) =>
            of(FootballActions.loadTopScorersFailure({ error })),
          ),
        );
      }),
    ),
  );

  loadTopAssists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FootballActions.loadTopAssists),
      switchMap(({ leagueId, season }) => {
        return this.humansService.loadTopAssists(leagueId, season).pipe(
          map((topAssists) => {
            return FootballActions.loadTopAssistsSuccess({
              topAssists: topAssists.response,
            });
          }),
          catchError((error) =>
            of(FootballActions.loadTopAssistsFailure({ error })),
          ),
        );
      }),
    ),
  );

  loadStandings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FootballActions.loadStandings),
      switchMap(({ leagueId, season }) => {
        return this.footballService.loadStandings(leagueId, season).pipe(
          map((standings) => {
            return FootballActions.loadStandingsSuccess({
              leagueStandings: standings.response,
            });
          }),
          catchError((error) =>
            of(FootballActions.loadStandingsFailure({ error })),
          ),
        );
      }),
    ),
  );
}
