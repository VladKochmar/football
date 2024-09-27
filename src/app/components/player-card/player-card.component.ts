import { Component, Input } from '@angular/core';
import { SquadMember } from '../../models/squad.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-player-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './player-card.component.html',
  styleUrl: './player-card.component.scss',
})
export class PlayerCardComponent {
  @Input() player!: SquadMember;
}
