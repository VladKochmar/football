import {
  mockFixture,
  mockLeagues,
  mockStandings,
  mockTopScorers,
} from '../../data/mock-data';
import {
  selectLeagueFixtures,
  selectLeagues,
  selectLeagueStandings,
  selectTopAssists,
  selectTopScorers,
} from './selectors';
import { FootballState } from './state';

describe('Selectors', () => {
  const initialState: FootballState = {
    leagues: mockLeagues,
    topScorers: mockTopScorers,
    loadingTopScorers: true,
    topAssists: mockTopScorers,
    loadingTopAssists: true,
    leagueStandings: mockStandings,
    loadingStandings: true,
    leagueFixtures: [mockFixture],
    loadingFixtures: true,
    currentLeague: null,
    error: null,
  };

  it('should select leagues form the state', () => {
    expect(selectLeagues.projector(initialState)).toEqual(initialState.leagues);
  });

  it('should select topAssists from the state', () => {
    expect(selectTopAssists.projector(initialState)).toEqual(
      initialState.topAssists,
    );
  });

  it('should select topScorers from the state', () => {
    expect(selectTopScorers.projector(initialState)).toEqual(
      initialState.topScorers,
    );
  });

  it('should select leagueStandings from the state', () => {
    expect(selectLeagueStandings.projector(initialState)).toEqual(
      initialState.leagueStandings,
    );
  });

  it('should select leagueFixtures from the state', () => {
    expect(selectLeagueFixtures.projector(initialState)).toEqual(
      initialState.leagueFixtures,
    );
  });
});
