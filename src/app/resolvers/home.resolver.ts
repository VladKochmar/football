import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { FootballState } from '../store/state';
import { loadLeagues } from '../store/actions';
import { selectLeaguesLoaded, selectTopEight } from '../store/selectors';
import { filter, switchMap, take, tap } from 'rxjs';
import { League } from '../models/league.model';

export const homeResolver: ResolveFn<League[] | null> = (route, state) => {
  const store = inject(Store<FootballState>);

  return store.pipe(
    select(selectLeaguesLoaded),
    tap((loaded) => {
      if (!loaded) store.dispatch(loadLeagues());
    }),
    switchMap((loaded) => {
      if (!loaded) {
        return store.pipe(
          select(selectTopEight),
          filter((leagues) => leagues !== null),
          take(1),
        );
      } else {
        return store.pipe(select(selectTopEight), take(1));
      }
    }),
  );
};
