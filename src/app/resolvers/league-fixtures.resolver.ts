import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { FootballState } from '../store/state';
import { selectLeagueFixtures } from '../store/selectors';
import { catchError, of, switchMap, take } from 'rxjs';
import { laodLeagueFixtures } from '../store/actions';

export const leagueFixturesResolver: ResolveFn<boolean> = (route, state) => {
  const store = inject(Store<FootballState>);

  const season = Number(route.parent?.paramMap.get('season'));
  const leagueId = Number(route.parent?.paramMap.get('leagueId'));

  return store.select(selectLeagueFixtures).pipe(
    take(1),
    switchMap((fixtures) => {
      const shouldLoad =
        !fixtures ||
        fixtures[0].league.id !== leagueId ||
        fixtures[0].league.season !== season;

      if (shouldLoad && leagueId && season)
        store.dispatch(laodLeagueFixtures({ leagueId, season }));

      return of(true);
    }),
    catchError(() => of(false)),
  );
};
