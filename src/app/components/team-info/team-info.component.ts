import { Component, Input } from '@angular/core';
import { TeamData } from '../../models/team.model';

@Component({
  selector: 'app-team-info',
  standalone: true,
  imports: [],
  templateUrl: './team-info.component.html',
  styleUrl: './team-info.component.scss',
})
export class TeamInfoComponent {
  @Input() teamData!: TeamData;
}
