import {
  mockFixture,
  mockLeagues,
  mockStandings,
  mockTopScorers,
} from '../../data/mock-data';
import {
  laodLeagueFixtures,
  laodLeagueFixturesSuccess,
  loadLeagueByIdSuccess,
  loadLeaguesFailure,
  loadLeaguesSuccess,
  loadStandings,
  loadStandingsFailure,
  loadStandingsSuccess,
  loadTopAssists,
  loadTopAssistsFailure,
  loadTopAssistsSuccess,
  loadTopScorers,
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

  it('should handle loadLeagueByIdSuccess', () => {
    const currentLeague = mockLeagues[0];

    const expectedState = {
      ...initialState,
      currentLeague,
    };

    const state = FootballReducer(
      initialState,
      loadLeagueByIdSuccess({ currentLeague }),
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle loadLeagueByIdFailure', () => {
    const error = 'Some Error';

    const expectedState = {
      ...initialState,
      error,
    };

    const state = FootballReducer(initialState, loadLeaguesFailure({ error }));
    expect(state).toEqual(expectedState);
  });

  it('should handle loadTopAssists', () => {
    const expectedState = {
      ...initialState,
      loadingTopAssists: true,
    };

    const state = FootballReducer(
      initialState,
      loadTopAssists({ leagueId: 333, season: 2024 }),
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle loadTopAssistsSuccess', () => {
    const topAssists = mockTopScorers;

    const expectedState = {
      ...initialState,
      topAssists,
      loadingTopAssists: false,
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
      loadingTopAssists: false,
      error,
    };

    const state = FootballReducer(
      initialState,
      loadTopAssistsFailure({ error }),
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle loadTopScorers', () => {
    const expectedState = {
      ...initialState,
      loadingTopScorers: true,
    };

    const state = FootballReducer(
      initialState,
      loadTopScorers({ leagueId: 333, season: 2024 }),
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle loadTopScorersSuccess', () => {
    const topScorers = mockTopScorers;

    const expectedState = {
      ...initialState,
      topScorers,
      loadingTopScorers: false,
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
      loadingTopScorers: false,
      error,
    };

    const state = FootballReducer(
      initialState,
      loadTopScorersFailure({ error }),
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle loadStandings', () => {
    const expectedState = {
      ...initialState,
      loadingStandings: true,
    };

    const state = FootballReducer(
      initialState,
      loadStandings({ leagueId: 333, season: 2024 }),
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle loadStandingsSuccess', () => {
    const leagueStandings = mockStandings;

    const expectedState = {
      ...initialState,
      leagueStandings,
      loadingStandings: false,
    };

    const state = FootballReducer(
      initialState,
      loadStandingsSuccess({ leagueStandings }),
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle loadStandingsFailure', () => {
    const error = 'Some Error';

    const expectedState = {
      ...initialState,
      leagueStandings: null,
      loadingStandings: false,
      error,
    };

    const state = FootballReducer(
      initialState,
      loadStandingsFailure({ error }),
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle laodLeagueFixtures', () => {
    const expectedState = {
      ...initialState,
      loadingFixtures: true,
    };

    const state = FootballReducer(
      initialState,
      laodLeagueFixtures({ leagueId: 333, season: 2024 }),
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle laodLeagueFixturesSuccess', () => {
    const leagueFixtures = [mockFixture];

    const expectedState = {
      ...initialState,
      leagueFixtures,
      loadingFixtures: false,
    };

    const state = FootballReducer(
      initialState,
      laodLeagueFixturesSuccess({ leagueFixtures }),
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle loadLeagueFixturesFailure', () => {
    const error = 'Some Error';

    const expectedState = {
      ...initialState,
      leagueFixtures: null,
      loadingFixtures: false,
      error,
    };
  });
});
