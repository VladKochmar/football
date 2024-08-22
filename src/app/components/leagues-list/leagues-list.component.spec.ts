import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaguesListComponent } from './leagues-list.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { LeagueCardComponent } from '../league-card/league-card.component';
import { League } from '../../models/league.model';
import { mockLeagues } from '../../../data/mock-data';

describe('LeaguesListComponent', () => {
  let component: LeaguesListComponent;
  let fixture: ComponentFixture<LeaguesListComponent>;
  let mockActivatedRoute: Partial<ActivatedRoute>;

  beforeEach(async () => {
    mockActivatedRoute = {
      data: of({
        leagues: mockLeagues as League[],
      }),
    };

    await TestBed.configureTestingModule({
      imports: [LeaguesListComponent, LeagueCardComponent],
      providers: [{ provide: ActivatedRoute, useValue: mockActivatedRoute }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaguesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize leagues from route data', () => {
    expect(component.leagues).toEqual(mockLeagues);
  });
});
