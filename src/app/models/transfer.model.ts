import { ApiResponse } from './response.model';

export interface TransferResponse extends ApiResponse {
  response: TransferInfo[];
}

export interface TransferInfo {
  player: {
    id: number;
    name: string;
  };
  update: string;
  transfers: Transfer[];
}

export interface Transfer {
  date: string;
  type: string;
  teams: {
    in: TransferTeam;
    out: TransferTeam;
  };
}

interface TransferTeam {
  id: number | string;
  name: string;
  logo: string;
}
