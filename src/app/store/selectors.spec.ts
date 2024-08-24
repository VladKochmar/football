import { mockLeagues, mockTopScorers } from '../../data/mock-data';
import { selectLeagues, selectTopAssists, selectTopScorers } from './selectors';
import { FootballState } from './state';

describe('Selectors', () => {
  const initialState: FootballState = {
    leagues: mockLeagues,
    topScorers: mockTopScorers,
    topAssists: mockTopScorers,
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
});
