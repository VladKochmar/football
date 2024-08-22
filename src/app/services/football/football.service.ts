import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { LeagueResponse } from '../../models/league.model';

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
}
