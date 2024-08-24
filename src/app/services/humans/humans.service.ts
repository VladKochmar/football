import { Injectable } from '@angular/core';
import { TopContributorResponse } from '../../models/top-contributor.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HumansService {
  private headers = new HttpHeaders({
    'x-rapidapi-host': 'v3.football.api-sports.io',
    'x-rapidapi-key': environment.API_KEY,
  });

  constructor(private http: HttpClient) {}

  loadTopScorers(
    leagueId: number | string,
    season: number | string,
  ): Observable<TopContributorResponse> {
    return this.http.get<TopContributorResponse>(
      `${environment.API_URL}/players/topscorers?season=${season}&league=${leagueId}`,
      { headers: this.headers },
    );
  }

  loadTopAssists(
    leagueId: number | string,
    season: number | string,
  ): Observable<TopContributorResponse> {
    return this.http.get<TopContributorResponse>(
      `${environment.API_URL}/players/topassists?season=${season}&league=${leagueId}`,
      { headers: this.headers },
    );
  }
}
