import { Component, OnInit } from '@angular/core';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { TopContributor } from '../../models/top-contributor.model';
import { takeUntil } from 'rxjs';
import { TopTableComponent } from '../../components/top-table/top-table.component';
import { Store } from '@ngrx/store';
import {
  selectLoadingTopAssists,
  selectLoadingTopScorers,
  selectTopAssists,
  selectTopScorers,
} from '../../store/selectors';
import { SkeletonTableComponent } from '../../components/skeleton-table/skeleton-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [CommonModule, TopTableComponent, SkeletonTableComponent],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.scss',
})
export class StatisticsComponent extends ClearObservable implements OnInit {
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
        this.topScorers = data;
      });

    this.selectedTopAssists$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.topAssists = data;
      });
  }
}
