import { Fixtures } from '../models/fixtures.model';
import { LeagueStandings } from '../models/league-standings.model';
import { League } from '../models/league.model';
import { TopContributor } from '../models/top-contributor.model';

export interface FootballState {
  leagues: League[] | null;
  topScorers: TopContributor[] | null;
  loadingTopScorers: boolean;
  topAssists: TopContributor[] | null;
  loadingTopAssists: boolean;
  leagueStandings: { league: LeagueStandings }[] | null;
  loadingStandings: boolean;
  currentLeague: League | null;
  leagueFixtures: Fixtures[] | null;
  loadingFixtures: boolean;
  error: any | null;
}

export const initialState: FootballState = {
  leagues: null,
  topScorers: null,
  loadingTopScorers: false,
  topAssists: null,
  loadingTopAssists: false,
  leagueStandings: null,
  loadingStandings: false,
  currentLeague: null,
  leagueFixtures: null,
  loadingFixtures: false,
  error: null,
};
