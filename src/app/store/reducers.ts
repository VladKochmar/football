import { createReducer, on } from '@ngrx/store';
import { initialState } from './state';
import * as FootballActions from './actions';

export const FootballReducer = createReducer(
  initialState,

  // Leagues
  on(FootballActions.loadLeaguesSuccess, (state, { leagues }) => {
    return {
      ...state,
      leagues,
    };
  }),

  on(FootballActions.loadLeaguesFailure, (state, { error }) => {
    return {
      ...state,
      leagues: null,
      error,
    };
  }),

  on(FootballActions.loadLeagueByIdSuccess, (state, { currentLeague }) => {
    return {
      ...state,
      currentLeague,
    };
  }),

  on(FootballActions.loadLeagueByIdFailure, (state, { error }) => {
    return {
      ...state,
      currentLeague: null,
      error,
    };
  }),

  // Top Contributions
  on(FootballActions.loadTopScorers, (state) => {
    return {
      ...state,
      loadingTopScorers: true,
    };
  }),

  on(FootballActions.loadTopScorersSuccess, (state, { topScorers }) => {
    return {
      ...state,
      topScorers,
      loadingTopScorers: false,
    };
  }),

  on(FootballActions.loadTopScorersFailure, (state, { error }) => {
    return {
      ...state,
      topScorers: null,
      loadingTopScorers: false,
      error,
    };
  }),

  on(FootballActions.loadTopAssists, (state) => {
    return {
      ...state,
      loadingTopAssists: true,
    };
  }),

  on(FootballActions.loadTopAssistsSuccess, (state, { topAssists }) => {
    return {
      ...state,
      topAssists,
      loadingTopAssists: false,
    };
  }),

  on(FootballActions.loadTopAssistsFailure, (state, { error }) => {
    return {
      ...state,
      topAssists: null,
      loadingTopAssists: false,
      error,
    };
  }),

  // Standings
  on(FootballActions.loadStandings, (state) => {
    return {
      ...state,
      loadingStandings: true,
    };
  }),

  on(FootballActions.loadStandingsSuccess, (state, { leagueStandings }) => {
    return {
      ...state,
      leagueStandings,
      loadingStandings: false,
    };
  }),

  on(FootballActions.loadStandingsFailure, (state, { error }) => {
    return {
      ...state,
      leagueStandings: null,
      loadingStandings: false,
      error,
    };
  }),

  // Fixtures
  on(FootballActions.laodLeagueFixtures, (state) => {
    return {
      ...state,
      loadingFixtures: true,
    };
  }),

  on(FootballActions.laodLeagueFixturesSuccess, (state, { leagueFixtures }) => {
    return {
      ...state,
      leagueFixtures,
      loadingFixtures: false,
    };
  }),

  on(FootballActions.loadLeagueFixturesFailure, (state, { error }) => {
    return {
      ...state,
      leagueFixtures: null,
      loadingFixtures: false,
      error,
    };
  }),
);
