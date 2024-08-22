import { Country } from './country.model';
import { LeagueInfo } from './league-info.model';
import { LeagueSeason } from './league-season.model';
import { ApiResponse } from './response.model';

export interface League {
  league: LeagueInfo;
  country: Country;
  seasons: LeagueSeason[];
}

export interface LeagueResponse extends ApiResponse {
  response: League[];
}
