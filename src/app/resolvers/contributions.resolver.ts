import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { FootballState } from '../store/state';
import { Store } from '@ngrx/store';
import { loadTopAssists, loadTopScorers } from '../store/actions';
import { selectTopAssists, selectTopScorers } from '../store/selectors';
import { combineLatest, filter, take } from 'rxjs';
import { TopContributor } from '../models/top-contributor.model';

export const contributionsResolver: ResolveFn<
  [TopContributor[] | null, TopContributor[] | null]
> = (route, state) => {
  const store = inject(Store<FootballState>);

  const season = route.paramMap.get('season') || 2023;
  const leagueId = route.paramMap.get('leagueId') || 2;

  store.dispatch(loadTopScorers({ season, leagueId }));
  store.dispatch(loadTopAssists({ season, leagueId }));

  return combineLatest([
    store.select(selectTopScorers).pipe(
      filter((players) => players !== null),
      take(1),
    ),
    store.select(selectTopAssists).pipe(
      filter((players) => players !== null),
      take(1),
    ),
  ]).pipe(take(1));
};
