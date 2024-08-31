import { ApiResponse } from './response.model';
import { Team } from './team.model';

export interface LeagueStandingsResponse extends ApiResponse {
  response: { league: LeagueStandings }[];
}

export interface LeagueStandings {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: TeamStandings[][];
}

export interface TeamStandings {
  rank: number;
  team: Team;
  points: number;
  goalsDiff: number;
  group: string;
  form: string;
  status: string;
  description: string;
  all: TeamStatistics;
  home: TeamStatistics;
  away: TeamStatistics;
  update: string;
}

interface TeamStatistics {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: TeamGoals;
}

interface TeamGoals {
  for: number;
  against: number;
}
