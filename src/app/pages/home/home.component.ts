import { Component } from '@angular/core';
import { LeaguesListComponent } from '../../components/leagues-list/leagues-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LeaguesListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
