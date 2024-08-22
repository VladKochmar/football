import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { FootballService } from './football.service';
import { mockLeagues } from '../../../data/mock-data';
import { environment } from '../../../environments/environment.development';

describe('FootballService', () => {
  let service: FootballService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FootballService],
    });

    service = TestBed.inject(FootballService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return leagues', () => {
    service.loadLeagues().subscribe((data) => {
      expect(data.response).toEqual(mockLeagues);
    });

    const req = httpMock.expectOne(`${environment.API_URL}/leagues`);

    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('x-rapidapi-host')).toBe(
      'v3.football.api-sports.io',
    );
    expect(req.request.headers.get('x-rapidapi-key')).toBe(environment.API_KEY);

    req.flush(mockLeagues);
  });
});
