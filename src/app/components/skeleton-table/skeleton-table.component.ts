import { Component } from '@angular/core';

@Component({
  selector: 'app-skeleton-table',
  standalone: true,
  imports: [],
  templateUrl: './skeleton-table.component.html',
  styleUrl: './skeleton-table.component.scss',
})
export class SkeletonTableComponent {
  itemsCount: number[] = new Array(8);
}
