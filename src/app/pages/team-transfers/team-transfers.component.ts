import { Component, OnInit } from '@angular/core';
import { TeamTransfersTableComponent } from '../../components/team-transfers-table/team-transfers-table.component';
import { TransferInfo } from '../../models/transfer.model';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { Store } from '@ngrx/store';
import { takeUntil } from 'rxjs';
import {
  selectLoadingTeamTransfers,
  selectTransfersIn,
  selectTransfersOut,
} from '../../store/selectors';
import { CommonModule } from '@angular/common';
import { SkeletonTableComponent } from '../../components/skeleton-table/skeleton-table.component';

@Component({
  selector: 'app-team-transfers',
  standalone: true,
  imports: [CommonModule, TeamTransfersTableComponent, SkeletonTableComponent],
  templateUrl: './team-transfers.component.html',
  styleUrl: './team-transfers.component.scss',
})
export class TeamTransfersComponent extends ClearObservable implements OnInit {
  transfersIn: TransferInfo[] | null = null;
  transfersOut: TransferInfo[] | null = null;

  constructor(private store: Store) {
    super();
  }

  selectedTransfersIn$ = this.store.select(selectTransfersIn);
  selectedTransfersOut$ = this.store.select(selectTransfersOut);
  selectedLoadingTransfers$ = this.store.select(selectLoadingTeamTransfers);

  ngOnInit(): void {
    this.selectedTransfersIn$
      .pipe(takeUntil(this.destroy$))
      .subscribe((transfers) => {
        if (transfers) this.transfersIn = transfers;
      });
    this.selectedTransfersOut$
      .pipe(takeUntil(this.destroy$))
      .subscribe((transfers) => {
        if (transfers) this.transfersOut = transfers;
      });
  }
}
