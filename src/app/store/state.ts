import { League } from '../models/league.model';

export interface FootballState {
  leagues: League[] | null;
  error: any | null;
}

export const initialState: FootballState = {
  leagues: null,
  error: null,
};
