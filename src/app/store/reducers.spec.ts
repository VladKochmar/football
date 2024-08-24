import { mockLeagues, mockTopScorers } from '../../data/mock-data';
import {
  loadLeaguesFailure,
  loadLeaguesSuccess,
  loadTopAssistsFailure,
  loadTopAssistsSuccess,
  loadTopScorersFailure,
  loadTopScorersSuccess,
} from './actions';
import { FootballReducer } from './reducers';
import { initialState } from './state';

describe('FootballReducer', () => {
  it('should return initial state', () => {
    const state = FootballReducer(undefined, { type: 'unknown' });
    expect(state).toBe(initialState);
  });

  it('should handle loadLeaguesSuccess', () => {
    const leagues = mockLeagues;

    const expectedState = {
      ...initialState,
      leagues,
    };

    const state = FootballReducer(
      initialState,
      loadLeaguesSuccess({ leagues }),
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle loadLeaguesFailure', () => {
    const error = 'Some Error';

    const expectedState = {
      ...initialState,
      leagues: null,
      error,
    };

    const state = FootballReducer(initialState, loadLeaguesFailure({ error }));
    expect(state).toEqual(expectedState);
  });

  it('should handle loadTopAssistsSuccess', () => {
    const topAssists = mockTopScorers;

    const expectedState = {
      ...initialState,
      topAssists,
    };

    const state = FootballReducer(
      initialState,
      loadTopAssistsSuccess({ topAssists }),
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle loadTopAssistsFailure', () => {
    const error = 'Some Error';

    const expectedState = {
      ...initialState,
      topAssists: null,
      error,
    };

    const state = FootballReducer(
      initialState,
      loadTopAssistsFailure({ error }),
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle loadTopScorersSuccess', () => {
    const topScorers = mockTopScorers;

    const expectedState = {
      ...initialState,
      topScorers,
    };

    const state = FootballReducer(
      initialState,
      loadTopScorersSuccess({ topScorers }),
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle loadTopScorersFailure', () => {
    const error = 'Some Error';

    const expectedState = {
      ...initialState,
      topScorers: null,
      error,
    };

    const state = FootballReducer(
      initialState,
      loadTopScorersFailure({ error }),
    );
    expect(state).toEqual(expectedState);
  });
});
