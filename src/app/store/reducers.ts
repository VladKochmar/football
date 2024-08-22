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
      error: error,
    };
  }),
);
