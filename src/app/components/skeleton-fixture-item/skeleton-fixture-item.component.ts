import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-skeleton-fixture-item',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './skeleton-fixture-item.component.html',
  styleUrl: './skeleton-fixture-item.component.scss',
})
export class SkeletonFixtureItemComponent {}
