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

// Players
export const selectCurrentPlayer = createSelector(
  selectFootballState,
  (state) => {
    return state.currentPlayer;
  },
);

export const selectLoadingPlayer = createSelector(
  selectFootballState,
  (state) => {
    return state.loadingPlayer;
  },
);

export const selectTrophies = createSelector(selectFootballState, (state) => {
  return state.trophies
    ? state.trophies.filter((trophy) => trophy.place === 'Winner')
    : null;
});

export const selectLoadingTrophies = createSelector(
  selectFootballState,
  (state) => {
    return state.loadingTrophies;
  },
);

export const selectTransfers = createSelector(selectFootballState, (state) => {
  return state.transfers;
});

export const selectLoadingTransfers = createSelector(
  selectFootballState,
  (state) => {
    return state.loadingTransfers;
  },
);

// Team
export const selectTeam = createSelector(selectFootballState, (state) => {
  return state.team;
});

export const selectTeamSquad = createSelector(selectFootballState, (state) => {
  return state.teamSquad;
});

export const selectLoadingSquad = createSelector(
  selectFootballState,
  (state) => {
    return state.loadingSquad;
  },
);

export const selectTeamTransfers = createSelector(
  selectFootballState,
  (state) => {
    return state.teamTransfers;
  },
);

export const selectLoadingTeamTransfers = createSelector(
  selectFootballState,
  (state) => {
    return state.loadingTeamTransfers;
  },
);

export const selectTransfersIn = createSelector(
  selectFootballState,
  (state) => {
    return state.teamTransfers?.filter(
      (item) => item.transfers[0].teams.in.name === state.team?.team.name,
    );
  },
);

export const selectTransfersOut = createSelector(
  selectFootballState,
  (state) => {
    return state.teamTransfers?.filter(
      (item) => item.transfers[0].teams.out.name === state.team?.team.name,
    );
  },
);
