import { createAction, props } from '@ngrx/store';
import { League } from '../models/league.model';
import { TopContributor } from '../models/top-contributor.model';

export const loadLeagues = createAction('[Leagues] Load Leagues');

export const loadLeaguesSuccess = createAction(
  '[Leagues] Load Leagues Success',
  props<{ leagues: League[] }>(),
);

export const loadLeaguesFailure = createAction(
  '[Leagues] Load Leagues Failure',
  props<{ error: any }>(),
);

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
