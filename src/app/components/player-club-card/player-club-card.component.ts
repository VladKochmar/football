import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Team } from '../../models/team.model';
import { StatisticsLeague } from '../../models/top-contributor.model';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-player-club-card',
  standalone: true,
  imports: [RouterLink, MatCardModule],
  templateUrl: './player-club-card.component.html',
  styleUrl: './player-club-card.component.scss',
})
export class PlayerClubCardComponent {
  @Input() team!: Team;
  @Input() league!: StatisticsLeague;
}
