import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { takeUntil } from 'rxjs';
import { League } from '../../models/league.model';

@Component({
  selector: 'app-league',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './league.component.html',
  styleUrl: './league.component.scss',
})
export class LeagueComponent extends ClearObservable implements OnInit {
  currentLeague: League | null = null;

  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.currentLeague = data['currentLeague'];
    });
  }
}
