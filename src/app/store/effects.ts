import { Injectable } from '@angular/core';
import { FootballService } from '../services/football/football.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as FootballActions from './actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class FootballEffects {
  constructor(
    private actions$: Actions,
    private footballService: FootballService,
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
}
