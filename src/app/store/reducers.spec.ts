import {
  mockFixture,
  mockLeagues,
  mockStandings,
  mockTopScorers,
  mockTransfers,
  mockTrophies,
} from '../../data/mock-data';
import {
  laodLeagueFixtures,
  laodLeagueFixturesSuccess,
  loadLeagueByIdSuccess,
  loadLeagueFixturesFailure,
  loadLeaguesFailure,
  loadLeaguesSuccess,
  loadPlayerByIdFailure,
  loadPlayerByIdSuccess,
  loadPlayerTransfersHistoryFailure,
  loadPlayerTransfersHistorySuccess,
  loadStandings,
  loadStandingsFailure,
  loadStandingsSuccess,
  loadTopAssists,
  loadTopAssistsFailure,
  loadTopAssistsSuccess,
  loadTopScorers,
  loadTopScorersFailure,
  loadTopScorersSuccess,
  loadTrophiesByHumanFailure,
  loadTrophiesByHumanSuccess,
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

    const state = FootballReducer(
      initialState,
      loadLeagueFixturesFailure({ error }),
    );

    expect(state).toEqual(expectedState);
  });

  it('should handle loadPlayerByIdSuccess', () => {
    const player = mockTopScorers[0];

    const expectedState = {
      ...initialState,
      loadingPlayer: false,
      currentPlayer: player,
    };

    const state = FootballReducer(
      initialState,
      loadPlayerByIdSuccess({ currentPlayer: player }),
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle loadPlayerByIdFailure', () => {
    const error = 'Some Error';

    const expectedState = {
      ...initialState,
      loadingPlayer: false,
      currentPlayer: null,
      error,
    };

    const state = FootballReducer(
      initialState,
      loadPlayerByIdFailure({ error }),
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle loadTrophiesByHumanSuccess', () => {
    const trophies = mockTrophies;

    const expectedState = {
      ...initialState,
      trophies,
      loadingTrophies: false,
    };

    const state = FootballReducer(
      initialState,
      loadTrophiesByHumanSuccess({ trophies }),
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle loadTrophiesByHumanFailure', () => {
    const error = 'Some Error';

    const expectedState = {
      ...initialState,
      trophies: null,
      loadingTrophies: false,
      error,
    };

    const state = FootballReducer(
      initialState,
      loadTrophiesByHumanFailure({ error }),
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle loadPlayerTransfersHistorySuccess', () => {
    const transfers = mockTransfers;

    const expectedState = {
      ...initialState,
      transfers,
      loadingTransfers: false,
    };

    const state = FootballReducer(
      initialState,
      loadPlayerTransfersHistorySuccess({ transfers }),
    );
    expect(state).toEqual(expectedState);
  });

  it('should handle loadPlayerTransfersHistoryFailure', () => {
    const error = 'Some Error';

    const expectedState = {
      ...initialState,
      transfers: null,
      loadingTransfers: false,
      error,
    };

    const state = FootballReducer(
      initialState,
      loadPlayerTransfersHistoryFailure({ error }),
    );
    expect(state).toEqual(expectedState);
  });
});
