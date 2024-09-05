import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FootballState } from './state';

export const selectFootballState =
  createFeatureSelector<FootballState>('footballState');

// Leagues
export const selectLeagues = createSelector(selectFootballState, (state) => {
  return state.leagues;
});

export const selectLeaguesLoaded = createSelector(
  selectFootballState,
  (state) => {
    return !!state.leagues;
  },
);

export const selectLeagueById = createSelector(selectFootballState, (state) => {
  return state.currentLeague;
});

export const selectLeagueByIdLoaded = createSelector(
  selectFootballState,
  (state) => {
    return !!state.currentLeague;
  },
);

export const selectTopEight = createSelector(selectFootballState, (state) => {
  let res = null;
  const LEAGUES_IDS = [39, 140, 135, 78, 61, 94, 333, 106];

  if (state.leagues)
    res = state.leagues.filter((league) =>
      LEAGUES_IDS.includes(league.league.id),
    );

  return res;
});

// Top Contributions
export const selectTopScorers = createSelector(selectFootballState, (state) => {
  return state.topScorers;
});

export const selectLoadingTopScorers = createSelector(
  selectFootballState,
  (state) => {
    return state.loadingTopScorers;
  },
);

export const selectTopAssists = createSelector(selectFootballState, (state) => {
  return state.topAssists;
});

export const selectLoadingTopAssists = createSelector(
  selectFootballState,
  (state) => {
    return state.loadingTopAssists;
  },
);

// Standings
export const selectLeagueStandings = createSelector(
  selectFootballState,
  (state) => {
    return state.leagueStandings;
  },
);

export const selectLoadingStandings = createSelector(
  selectFootballState,
  (state) => {
    return state.loadingStandings;
  },
);

// Fixtures
export const selectLeagueFixtures = createSelector(
  selectFootballState,
  (state) => {
    return state.leagueFixtures;
  },
);

export const selectLoadingFixtures = createSelector(
  selectFootballState,
  (state) => {
    return state.loadingFixtures;
  },
);
