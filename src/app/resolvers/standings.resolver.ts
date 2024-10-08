import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { FootballState } from '../store/state';
import { loadStandings } from '../store/actions';
import { selectLeagueStandings } from '../store/selectors';
import { catchError, of, switchMap, take } from 'rxjs';

export const standingsResolver: ResolveFn<boolean> = (route, state) => {
  const store = inject(Store<FootballState>);

  const season = Number(route.parent?.paramMap.get('season'));
  const leagueId = Number(route.parent?.paramMap.get('leagueId'));

  return store.select(selectLeagueStandings).pipe(
    take(1),
    switchMap((standings) => {
      const shouldLoad =
        !standings ||
        standings[0].league.id !== leagueId ||
        standings[0].league.season !== season;

      if (shouldLoad && leagueId && season)
        store.dispatch(loadStandings({ leagueId, season }));

      return of(true);
    }),
    catchError(() => of(false)),
  );
};
