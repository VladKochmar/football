import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { League } from '../../models/league.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-league-card',
  standalone: true,
  imports: [MatCardModule, RouterLink],
  templateUrl: './league-card.component.html',
  styleUrl: './league-card.component.scss',
})
export class LeagueCardComponent {
  @Input() league!: League;
}
