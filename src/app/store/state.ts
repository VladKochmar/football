import { League } from '../models/league.model';
import { TopContributor } from '../models/top-contributor.model';

export interface FootballState {
  leagues: League[] | null;
  topScorers: TopContributor[] | null;
  topAssists: TopContributor[] | null;
  error: any | null;
}

export const initialState: FootballState = {
  leagues: null,
  topScorers: null,
  topAssists: null,
  error: null,
};
