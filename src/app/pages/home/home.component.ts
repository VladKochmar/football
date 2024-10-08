import { Component, OnInit } from '@angular/core';
import { LeaguesListComponent } from '../../components/leagues-list/leagues-list.component';
import { TopTableComponent } from '../../components/top-table/top-table.component';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { takeUntil } from 'rxjs';
import { TopContributor } from '../../models/top-contributor.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
  selectLoadingTopAssists,
  selectLoadingTopScorers,
  selectTopAssists,
  selectTopScorers,
} from '../../store/selectors';
import { SkeletonTableComponent } from '../../components/skeleton-table/skeleton-table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    LeaguesListComponent,
    TopTableComponent,
    SkeletonTableComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent extends ClearObservable implements OnInit {
  topScorers: TopContributor[] | null = null;
  topAssists: TopContributor[] | null = null;

  constructor(private store: Store) {
    super();
  }

  selectedTopScorers$ = this.store.select(selectTopScorers);
  selectedTopAssists$ = this.store.select(selectTopAssists);
  selectedLoadingScorers$ = this.store.select(selectLoadingTopScorers);
  selectedLoadingAssists$ = this.store.select(selectLoadingTopAssists);

  ngOnInit(): void {
    this.selectedTopScorers$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.topScorers = data ? data.slice(0, 5) : null;
      });

    this.selectedTopAssists$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.topAssists = data ? data.slice(0, 5) : null;
      });
  }
}
