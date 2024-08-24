import { TestBed } from '@angular/core/testing';

import { HumansService } from './humans.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { mockTopScorers } from '../../../data/mock-data';
import { environment } from '../../../environments/environment.development';

describe('HumansService', () => {
  let service: HumansService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HumansService],
    });
    service = TestBed.inject(HumansService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return top scorers', () => {
    const season = 2023,
      leagueId = 2;

    service.loadTopScorers(leagueId, season).subscribe((data) => {
      expect(data.response).toEqual(mockTopScorers);
    });

    const req = httpMock.expectOne(
      `${environment.API_URL}/players/topscorers?season=${season}&league=${leagueId}`,
    );

    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('x-rapidapi-host')).toBe(
      'v3.football.api-sports.io',
    );
    expect(req.request.headers.get('x-rapidapi-key')).toBe(environment.API_KEY);

    req.flush(mockTopScorers);
  });

  it('should return top assists', () => {
    const season = 2023,
      leagueId = 2;

    service.loadTopAssists(leagueId, season).subscribe((data) => {
      expect(data.response).toEqual(mockTopScorers);
    });

    const req = httpMock.expectOne(
      `${environment.API_URL}/players/topassists?season=${season}&league=${leagueId}`,
    );

    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('x-rapidapi-host')).toBe(
      'v3.football.api-sports.io',
    );
    expect(req.request.headers.get('x-rapidapi-key')).toBe(environment.API_KEY);

    req.flush(mockTopScorers);
  });
});
