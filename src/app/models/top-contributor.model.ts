import { Human } from './human.model';
import { ApiResponse } from './response.model';

export interface TopContributor {
  player: Human;
  statistics: PlayerStatistics[];
}

export interface TopContributorResponse extends ApiResponse {
  response: TopContributor[];
}

interface PlayerStatistics {
  team: Team;
  league: StatisticsLeague;
  games: Games;
  substitutes: Substitutes;
  shots: Shots;
  goals: Goals;
  passes: Passes;
  tackles: Tackles;
  duels: Duels;
  dribbles: Dribbles;
  fouls: Fouls;
  cards: Cards;
  penalty: Penalty;
}

interface Team {
  id: number;
  name: string;
  logo: string;
}

interface StatisticsLeague {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
}

interface Games {
  appearences: number;
  lineups: number;
  minutes: number;
  number: null | number;
  position: string;
  rating: string;
  captain: boolean;
}

interface Substitutes {
  in: number;
  out: number;
  bench: number;
}

interface Shots {
  total: number;
  on: number;
}

interface Goals {
  total: number;
  conceded: null | number;
  assists: number;
  saves: number;
}

interface Passes {
  total: number;
  key: number;
  accuracy: number;
}

interface Tackles {
  total: number;
  blocks: number;
  interceptions: number;
}

interface Duels {
  total: number;
  won: number;
}

interface Dribbles {
  attempts: number;
  success: number;
  past: null | number;
}

interface Fouls {
  drawn: number;
  committed: number;
}

interface Cards {
  yellow: number;
  yellowred: number;
  red: number;
}

interface Penalty {
  won: number;
  commited: null | number;
  scored: number;
  missed: number;
  saved: null | number;
}
