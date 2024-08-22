import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { League } from '../../models/league.model';

@Component({
  selector: 'app-league-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './league-card.component.html',
  styleUrl: './league-card.component.scss',
})
export class LeagueCardComponent {
  @Input() league!: League;
}
