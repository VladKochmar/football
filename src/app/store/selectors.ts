import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FootballState } from './state';

export const selectFootballState =
  createFeatureSelector<FootballState>('footballState');

export const selectLeagues = createSelector(selectFootballState, (state) => {
  return state.leagues;
});

export const selectLeaguesLoaded = createSelector(
  selectFootballState,
  (state) => {
    return !!state.leagues;
  },
);

export const selectTopEight = createSelector(selectFootballState, (state) => {
  let res = null;
  const LEAGUES_IDS = [39, 140, 135, 78, 61, 2, 3, 848];

  if (state.leagues)
    res = state.leagues.filter((league) =>
      LEAGUES_IDS.includes(league.league.id),
    );

  return res;
});

export const selectTopScorers = createSelector(selectFootballState, (state) => {
  return state.topScorers;
});

export const selectTopAssists = createSelector(selectFootballState, (state) => {
  return state.topAssists;
});
