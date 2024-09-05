import { ApiResponse } from './response.model';
import { Venue } from './venue.model';

export interface FixturesApi extends ApiResponse {
  response: Fixtures[];
}

export interface Fixtures {
  fixture: Fixture;
  league: LeagueFixtures;
  teams: {
    home: FixtureTeam;
    away: FixtureTeam;
  };
  goals: FixtureGoals;
  score: {
    halftime: FixtureGoals;
    fulltime: FixtureGoals;
    extratime: FixtureGoals;
    penalty: FixtureGoals;
  };
}

export interface Fixture {
  id: number;
  referee: null | any;
  timezone: string;
  date: string;
  timestamp: number;
  periods: {
    first: number | null;
    second: number | null;
  };
  venue: Venue;
  status: {
    long: string | null;
    short: string;
    elapsed: number;
  };
}

interface LeagueFixtures {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  round: string;
}

interface FixtureTeam {
  id: number;
  name: string;
  logo: string;
  winner: boolean;
}

interface FixtureGoals {
  home: number | null;
  away: number | null;
}
