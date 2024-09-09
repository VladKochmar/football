import { Component, OnInit } from '@angular/core';
import { PlayerInfoComponent } from '../../components/player-info/player-info.component';
import { TopContributor } from '../../models/top-contributor.model';
import { Trophy } from '../../models/trophy.model';
import { TransferInfo } from '../../models/transfer.model';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { Store } from '@ngrx/store';
import {
  selectCurrentPlayer,
  selectLoadingPlayer,
  selectLoadingTransfers,
  selectLoadingTrophies,
  selectTransfers,
  selectTrophies,
} from '../../store/selectors';
import { takeUntil } from 'rxjs';
import { PlayerClubCardComponent } from '../../components/player-club-card/player-club-card.component';
import { TrophiesComponent } from '../../components/trophies/trophies.component';
import { TransferCardComponent } from '../../components/transfer-card/transfer-card.component';
import { CommonModule } from '@angular/common';
import { SkeletonTableComponent } from '../../components/skeleton-table/skeleton-table.component';
import { SkeletonTransferComponent } from '../../components/skeleton-transfer/skeleton-transfer.component';

@Component({
  selector: 'app-player-details',
  standalone: true,
  imports: [
    CommonModule,
    PlayerInfoComponent,
    PlayerClubCardComponent,
    TrophiesComponent,
    TransferCardComponent,
    SkeletonTableComponent,
    SkeletonTransferComponent,
  ],
  templateUrl: './player-details.component.html',
  styleUrl: './player-details.component.scss',
})
export class PlayerDetailsComponent extends ClearObservable implements OnInit {
  player: TopContributor | null = null;
  trophies: Trophy[] | null = null;
  transfers: TransferInfo[] | null = null;
  skeletonTransfersCount: number[] = new Array(8);

  constructor(private store: Store) {
    super();
  }

  selectPlayerLoading$ = this.store.select(selectLoadingPlayer);
  selectTrophiesLoading$ = this.store.select(selectLoadingTrophies);
  selectTransfersLoading$ = this.store.select(selectLoadingTransfers);

  ngOnInit(): void {
    this.store
      .select(selectCurrentPlayer)
      .pipe(takeUntil(this.destroy$))
      .subscribe((player) => {
        this.player = player;
      });

    this.store
      .select(selectTrophies)
      .pipe(takeUntil(this.destroy$))
      .subscribe((trophies) => {
        this.trophies = trophies;
      });

    this.store
      .select(selectTransfers)
      .pipe(takeUntil(this.destroy$))
      .subscribe((transfers) => {
        this.transfers = transfers;
      });
  }
}
