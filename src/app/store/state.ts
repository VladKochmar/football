import { Fixtures } from '../models/fixtures.model';
import { LeagueStandings } from '../models/league-standings.model';
import { League } from '../models/league.model';
import { Squad } from '../models/squad.model';
import { TeamData } from '../models/team.model';
import { TopContributor } from '../models/top-contributor.model';
import { TransferInfo } from '../models/transfer.model';
import { Trophy } from '../models/trophy.model';

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
  currentPlayer: TopContributor | null;
  loadingPlayer: boolean;
  trophies: Trophy[] | null;
  loadingTrophies: boolean;
  transfers: TransferInfo[] | null;
  loadingTransfers: boolean;
  team: TeamData | null;
  teamSquad: Squad[] | null;
  loadingSquad: boolean;
  teamTransfers: TransferInfo[] | null;
  loadingTeamTransfers: boolean;
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
  currentPlayer: null,
  loadingPlayer: false,
  trophies: null,
  loadingTrophies: false,
  transfers: null,
  loadingTransfers: false,
  team: null,
  teamSquad: null,
  loadingSquad: false,
  teamTransfers: null,
  loadingTeamTransfers: false,
  error: null,
};
