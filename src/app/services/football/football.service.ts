import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { LeagueResponse } from '../../models/league.model';
import { LeagueStandingsResponse } from '../../models/league-standings.model';

@Injectable({
  providedIn: 'root',
})
export class FootballService {
  private headers = new HttpHeaders({
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': environment.API_KEY,
  });

  constructor(private http: HttpClient) {}

  loadLeagues(): Observable<LeagueResponse> {
    return this.http.get<LeagueResponse>(`${environment.API_URL}/leagues`, {
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
}
