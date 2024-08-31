import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { FootballState } from '../store/state';
import { loadStandings } from '../store/actions';
import {
  selectLeagueStandings,
  selectStandingsLoaded,
} from '../store/selectors';
import { filter, map, switchMap, take, tap, withLatestFrom } from 'rxjs';
import { LeagueStandings } from '../models/league-standings.model';

export const standingsResolver: ResolveFn<
  { league: LeagueStandings }[] | null
> = (route, state) => {
  const store = inject(Store<FootballState>);

  const season = Number(route.paramMap.get('season'));
  const leagueId = Number(route.paramMap.get('leagueId'));

  return store.pipe(
    select(selectStandingsLoaded),
    withLatestFrom(store.pipe(select(selectLeagueStandings))),
    switchMap(([loaded, standings]) => {
      if (
        !loaded ||
        !standings ||
        standings[0].league.season !== season ||
        standings[0].league.id !== leagueId
      ) {
        store.dispatch(loadStandings({ leagueId, season }));
        return store.pipe(
          select(selectLeagueStandings),
          filter(
            (standings) =>
              standings !== null &&
              standings[0].league.season === season &&
              standings[0].league.id === leagueId,
          ),
          take(1),
        );
      } else {
        return store.pipe(select(selectLeagueStandings), take(1));
      }
    }),
  );
};
