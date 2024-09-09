import { Component, Input } from '@angular/core';
import { Human } from '../../models/human.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-player-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-info.component.html',
  styleUrl: './player-info.component.scss',
})
export class PlayerInfoComponent {
  @Input() player!: Human;
}
