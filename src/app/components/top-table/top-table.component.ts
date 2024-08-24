import { Component, Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TopContributor } from '../../models/top-contributor.model';

@Component({
  selector: 'app-top-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './top-table.component.html',
  styleUrl: './top-table.component.scss',
})
export class TopTableComponent {
  @Input() type: 'goals' | 'assists' = 'goals';
  @Input() players!: TopContributor[];

  displayedColumns: string[] = ['player', 'club', 'goals'];
}
