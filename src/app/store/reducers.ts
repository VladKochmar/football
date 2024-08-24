import { createReducer, on } from '@ngrx/store';
import { initialState } from './state';
import * as FootballActions from './actions';

export const FootballReducer = createReducer(
  initialState,

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

  on(FootballActions.loadTopScorersSuccess, (state, { topScorers }) => {
    return {
      ...state,
      topScorers,
    };
  }),

  on(FootballActions.loadTopScorersFailure, (state, { error }) => {
    return {
      ...state,
      topScorers: null,
      error,
    };
  }),

  on(FootballActions.loadTopAssistsSuccess, (state, { topAssists }) => {
    return {
      ...state,
      topAssists,
    };
  }),

  on(FootballActions.loadTopAssistsFailure, (state, { error }) => {
    return {
      ...state,
      topAssists: null,
      error,
    };
  }),
);
