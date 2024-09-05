import { ResolveFn } from '@angular/router';
import { League } from '../models/league.model';
import { inject } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { FootballState } from '../store/state';
import { selectLeagueById, selectLeagueByIdLoaded } from '../store/selectors';
import { filter, switchMap, take, withLatestFrom } from 'rxjs';
import { loadLeagueById } from '../store/actions';

export const currentLeagueResolver: ResolveFn<League | null> = (
  route,
  state,
) => {
  const store = inject(Store<FootballState>);
  const leagueId = Number(route.paramMap.get('leagueId'));

  return store.pipe(
    select(selectLeagueByIdLoaded),
    withLatestFrom(store.pipe(select(selectLeagueById))),
    switchMap(([loaded, currentLeague]) => {
      if (!loaded || !currentLeague || currentLeague.league.id !== leagueId) {
        store.dispatch(loadLeagueById({ leagueId }));
        return store.pipe(
          select(selectLeagueById),
          filter((league) => league !== null && league.league.id === leagueId),
          take(1),
        );
      } else {
        return store.pipe(select(selectLeagueById), take(1));
      }
    }),
  );
};
