import { Component, Input } from '@angular/core';
import { Fixtures } from '../../models/fixtures.model';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-fixture-item',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterLink],
  templateUrl: './fixture-item.component.html',
  styleUrl: './fixture-item.component.scss',
})
export class FixtureItemComponent {
  @Input() fixture!: Fixtures;
}
