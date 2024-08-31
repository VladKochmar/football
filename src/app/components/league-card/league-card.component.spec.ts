import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueCardComponent } from './league-card.component';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

describe('LeagueCardComponent', () => {
  let component: LeagueCardComponent;
  let fixture: ComponentFixture<LeagueCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeagueCardComponent, MatCardModule, RouterLink],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueCardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
