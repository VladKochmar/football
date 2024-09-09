import { ApiResponse } from './response.model';

export interface Trophy {
  league: string;
  country: string;
  season: string;
  place: string;
}

export interface TrophiesResponse extends ApiResponse {
  response: Trophy[];
}
