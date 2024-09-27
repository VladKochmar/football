import { VenueInfo } from './venue.model';

export interface Team {
  id: number;
  name: string;
  logo: string;
}

export interface TeamInfo extends Team {
  code: string;
  country: string;
  founded: number;
  national: boolean;
}

export interface TeamData {
  team: TeamInfo;
  venue: VenueInfo;
}

export interface TeamResponse extends Response {
  response: TeamData[];
}
