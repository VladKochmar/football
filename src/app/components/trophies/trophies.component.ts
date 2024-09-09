import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Trophy } from '../../models/trophy.model';

@Component({
  selector: 'app-trophies',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './trophies.component.html',
  styleUrl: './trophies.component.scss',
})
export class TrophiesComponent {
  @Input() trophies!: Trophy[];

  displayedColumns: string[] = ['league', 'country', 'season'];
}
