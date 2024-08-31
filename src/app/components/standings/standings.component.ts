import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { TeamStandings } from '../../models/league-standings.model';

@Component({
  selector: 'app-standings',
  standalone: true,
  imports: [MatTableModule, MatIconModule],
  templateUrl: './standings.component.html',
  styleUrl: './standings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StandingsComponent {
  @Input() standings!: TeamStandings[];

  displayedColumns: string[] = [
    'Club',
    'P',
    'W',
    'D',
    'L',
    'GS',
    'GC',
    'GD',
    'Points',
    'Last',
  ];
}
