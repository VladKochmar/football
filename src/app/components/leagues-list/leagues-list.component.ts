import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { League } from '../../models/league.model';
import { LeagueCardComponent } from '../league-card/league-card.component';
import { ActivatedRoute } from '@angular/router';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-leagues-list',
  standalone: true,
  imports: [LeagueCardComponent],
  templateUrl: './leagues-list.component.html',
  styleUrl: './leagues-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeaguesListComponent extends ClearObservable implements OnInit {
  leagues: League[] | null = null;

  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.leagues = data['leagues'];
    });
  }
}
