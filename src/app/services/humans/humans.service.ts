import { Injectable } from '@angular/core';
import { TopContributorResponse } from '../../models/top-contributor.model';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TrophiesResponse } from '../../models/trophy.model';
import { TransferResponse } from '../../models/transfer.model';

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

  loadPlayerById(
    playerId: number | string,
  ): Observable<TopContributorResponse> {
    return this.http.get<TopContributorResponse>(
      `${environment.API_URL}/players?id=${playerId}&season=2024`,
      { headers: this.headers },
    );
  }

  loadTrophiesByHuman(
    id: string | number,
    humanType: 'player' | 'coach' = 'player',
  ): Observable<TrophiesResponse> {
    return this.http.get<TrophiesResponse>(
      `${environment.API_URL}/trophies?${humanType}=${id}`,
      { headers: this.headers },
    );
  }

  loadPlayerTransfersHistory(
    id: number | string,
  ): Observable<TransferResponse> {
    return this.http.get<TransferResponse>(
      `${environment.API_URL}/transfers?player=${id}`,
      { headers: this.headers },
    );
  }
}
