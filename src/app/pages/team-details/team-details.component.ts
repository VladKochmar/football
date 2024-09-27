import { Component, OnInit } from '@angular/core';
import { TeamInfoComponent } from '../../components/team-info/team-info.component';
import { TeamData } from '../../models/team.model';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { Store } from '@ngrx/store';
import { selectTeam } from '../../store/selectors';
import { takeUntil } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-team-details',
  standalone: true,
  imports: [TeamInfoComponent, RouterLink, RouterOutlet],
  templateUrl: './team-details.component.html',
  styleUrl: './team-details.component.scss',
})
export class TeamDetailsComponent extends ClearObservable implements OnInit {
  team: TeamData | null = null;

  constructor(private store: Store) {
    super();
  }

  selectedTeam$ = this.store.select(selectTeam);

  ngOnInit(): void {
    this.selectedTeam$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.team = data;
    });
  }
}
