import { Component, OnInit } from '@angular/core';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { Store } from '@ngrx/store';
import { Fixtures } from '../../models/fixtures.model';
import {
  selectLeagueFixtures,
  selectLoadingFixtures,
} from '../../store/selectors';
import { takeUntil } from 'rxjs';
import { FixtureItemComponent } from '../../components/fixture-item/fixture-item.component';
import { SkeletonFixtureItemComponent } from '../../components/skeleton-fixture-item/skeleton-fixture-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-league-fixtures',
  standalone: true,
  imports: [CommonModule, FixtureItemComponent, SkeletonFixtureItemComponent],
  templateUrl: './league-fixtures.component.html',
  styleUrl: './league-fixtures.component.scss',
})
export class LeagueFixturesComponent extends ClearObservable implements OnInit {
  fixtures: Fixtures[] | null = null;
  skeletonFixtures: number[] = new Array(8);

  constructor(private store: Store) {
    super();
  }

  selectedLoading$ = this.store.select(selectLoadingFixtures);
  selectedFixtures$ = this.store.select(selectLeagueFixtures);

  ngOnInit(): void {
    this.selectedFixtures$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.fixtures = data;
    });
  }
}
