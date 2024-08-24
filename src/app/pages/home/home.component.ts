import { Component, OnInit } from '@angular/core';
import { LeaguesListComponent } from '../../components/leagues-list/leagues-list.component';
import { TopTableComponent } from '../../components/top-table/top-table.component';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { ActivatedRoute } from '@angular/router';
import { takeUntil } from 'rxjs';
import { TopContributor } from '../../models/top-contributor.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LeaguesListComponent, TopTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent extends ClearObservable implements OnInit {
  topScorers: TopContributor[] | null = null;
  topAssists: TopContributor[] | null = null;

  constructor(private route: ActivatedRoute) {
    super();
  }

  ngOnInit(): void {
    this.route.data.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      const [topScorers, topAssists] = data['contributorsData'];
      this.topScorers = topScorers?.slice(0, 5);
      this.topAssists = topAssists?.slice(0, 5);
    });
  }
}
