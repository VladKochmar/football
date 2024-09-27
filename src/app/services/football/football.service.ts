import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { LeagueResponse } from '../../models/league.model';
import { LeagueStandingsResponse } from '../../models/league-standings.model';
import { FixturesApi } from '../../models/fixtures.model';
import { TeamResponse } from '../../models/team.model';
import { SquadResponse } from '../../models/squad.model';
import { TransferResponse } from '../../models/transfer.model';

@Injectable({
  providedIn: 'root',
})
export class FootballService {
  private headers = new HttpHeaders({
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': environment.API_KEY,
  });

  constructor(private http: HttpClient) {}

  loadLeagues(leagueId?: number | string): Observable<LeagueResponse> {
    const url = leagueId
      ? `${environment.API_URL}/leagues?id=${leagueId}`
      : `${environment.API_URL}/leagues`;
    return this.http.get<LeagueResponse>(url, {
      headers: this.headers,
    });
  }

  loadStandings(
    leagueId: string | number,
    season: string | number,
  ): Observable<LeagueStandingsResponse> {
    return this.http.get<LeagueStandingsResponse>(
      `${environment.API_URL}/standings?league=${leagueId}&season=${season}`,
      { headers: this.headers },
    );
  }

  loadLeagueFixtures(
    leagueId: string | number,
    season: string | number,
  ): Observable<FixturesApi> {
    return this.http.get<FixturesApi>(
      `${environment.API_URL}/fixtures?league=${leagueId}&season=${season}`,
      { headers: this.headers },
    );
  }

  loadTeamInfoById(teamId: string | number): Observable<TeamResponse> {
    return this.http.get<TeamResponse>(
      `${environment.API_URL}/teams?id=${teamId}`,
      { headers: this.headers },
    );
  }

  loadSquadByTeamId(teamId: string | number): Observable<SquadResponse> {
    return this.http.get<SquadResponse>(
      `${environment.API_URL}/players/squads?team=${teamId}`,
      { headers: this.headers },
    );
  }

  loadTeamTransfersById(teamId: string | number): Observable<TransferResponse> {
    return this.http.get<TransferResponse>(
      `${environment.API_URL}/transfers?team=${teamId}`,
      { headers: this.headers },
    );
  }
}
