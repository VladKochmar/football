import { Team } from './team.model';

export interface Squad {
  team: Team;
  players: SquadMember[];
}

export interface SquadMember {
  id: number;
  name: string;
  age: number;
  number: number;
  position: string;
  photo: string;
}

export interface SquadResponse extends Response {
  response: Squad[];
}
