import { createAction, props } from '@ngrx/store';
import { League } from '../models/league.model';
import { TopContributor } from '../models/top-contributor.model';
import { LeagueStandings } from '../models/league-standings.model';
import { Fixtures } from '../models/fixtures.model';
import { Trophy } from '../models/trophy.model';
import { TransferInfo } from '../models/transfer.model';

// Leagues
export const loadLeagues = createAction('[Leagues] Load Leagues');

export const loadLeaguesSuccess = createAction(
  '[Leagues] Load Leagues Success',
  props<{ leagues: League[] }>(),
);

export const loadLeaguesFailure = createAction(
  '[Leagues] Load Leagues Failure',
  props<{ error: any }>(),
);

export const loadLeagueById = createAction(
  '[Leagues] Load League By Id',
  props<{ leagueId: string | number }>(),
);

export const loadLeagueByIdSuccess = createAction(
  '[Leagues] Load League By Id Success',
  props<{ currentLeague: League | null }>(),
);

export const loadLeagueByIdFailure = createAction(
  '[Leagues] Load League By Id Failure',
  props<{ error: any }>(),
);

// Top Contributions
export const loadTopScorers = createAction(
  '[Top Contributions] Load Top Scorers',
  props<{ season: number | string; leagueId: number | string }>(),
);

export const loadTopScorersSuccess = createAction(
  '[Top Contributions] Load Top Scorers Success',
  props<{ topScorers: TopContributor[] | null }>(),
);

export const loadTopScorersFailure = createAction(
  '[Top Contributions] Load Top Scorers Failure',
  props<{ error: any }>(),
);

export const loadTopAssists = createAction(
  '[Top Contributions] Load Top Assists',
  props<{ season: number | string; leagueId: number | string }>(),
);

export const loadTopAssistsSuccess = createAction(
  '[Top Contributions] Load Top Assists Success',
  props<{ topAssists: TopContributor[] | null }>(),
);

export const loadTopAssistsFailure = createAction(
  '[Top Contributions] Load Top Assists Failure',
  props<{ error: any }>(),
);

// Standings
export const loadStandings = createAction(
  '[Standings] Load League Stangings',
  props<{ leagueId: number | string; season: string | number }>(),
);

export const loadStandingsSuccess = createAction(
  '[Standings] Load League Stangings Success',
  props<{ leagueStandings: { league: LeagueStandings }[] | null }>(),
);

export const loadStandingsFailure = createAction(
  '[Standings] Load League Stangings Failure',
  props<{ error: any }>(),
);

// Fixtures
export const laodLeagueFixtures = createAction(
  '[Fixtures] Load League Fixtures',
  props<{ leagueId: number | string; season: number | string }>(),
);

export const laodLeagueFixturesSuccess = createAction(
  '[Fixtures] Load League Fixtures Success',
  props<{ leagueFixtures: Fixtures[] | null }>(),
);

export const loadLeagueFixturesFailure = createAction(
  '[Fixtures] Load League Fixtures Failure',
  props<{ error: any }>(),
);

// Player
export const loadPlayerById = createAction(
  '[Player] Load Player By Id',
  props<{ playerId: string | number }>(),
);

export const loadPlayerByIdSuccess = createAction(
  '[Player] Load Player By Id Success',
  props<{ currentPlayer: TopContributor | null }>(),
);

export const loadPlayerByIdFailure = createAction(
  '[Player] Load Player By Id Failure',
  props<{ error: any }>(),
);

export const loadTrophiesByHuman = createAction(
  '[Trophies] Load Trophies By Id',
  props<{ id: string | number; humanType: 'player' | 'coach' }>(),
);

export const loadTrophiesByHumanSuccess = createAction(
  '[Trophies] Load Trophies By Id Success',
  props<{ trophies: Trophy[] | null }>(),
);

export const loadTrophiesByHumanFailure = createAction(
  '[Trophies] Load Trophies By Id Failure',
  props<{ error: any }>(),
);

export const loadPlayerTransfersHistory = createAction(
  '[Player Transfers] Load Player Transfers History',
  props<{ id: string | number }>(),
);

export const loadPlayerTransfersHistorySuccess = createAction(
  '[Player Transfers] Load Player Transfers History Success',
  props<{ transfers: TransferInfo[] | null }>(),
);

export const loadPlayerTransfersHistoryFailure = createAction(
  '[Player Transfers] Load Player Transfers History Failure',
  props<{ error: any }>(),
);
