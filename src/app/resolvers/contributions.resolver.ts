import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { FootballState } from '../store/state';
import { Store } from '@ngrx/store';
import { loadTopAssists, loadTopScorers } from '../store/actions';
import { selectTopAssists, selectTopScorers } from '../store/selectors';
import { catchError, combineLatest, of, switchMap, take } from 'rxjs';

export const contributionsResolver: ResolveFn<boolean> = (route, state) => {
  const store = inject(Store<FootballState>);

  const season = Number(route.parent?.paramMap.get('season')) || 2023;
  const leagueId = Number(route.parent?.paramMap.get('leagueId')) || 2;

  return combineLatest([
    store.select(selectTopScorers),
    store.select(selectTopAssists),
  ]).pipe(
    take(1),
    switchMap(([topScorers, topAssists]) => {
      const shouldLoadScorers =
        !topScorers ||
        topScorers[0].statistics[0].league.id !== leagueId ||
        topScorers[0].statistics[0].league.season !== season;

      const shouldLoadAssists =
        !topAssists ||
        topAssists[0].statistics[0].league.id !== leagueId ||
        topAssists[0].statistics[0].league.season !== season;

      if (shouldLoadScorers && shouldLoadAssists && leagueId && season) {
        store.dispatch(loadTopScorers({ leagueId, season }));
        store.dispatch(loadTopAssists({ leagueId, season }));
      }

      return of(true);
    }),
    catchError(() => of(false)),
  );
};
