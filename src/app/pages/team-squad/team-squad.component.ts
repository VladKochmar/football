import { Component, OnInit } from '@angular/core';
import { PlayerCardComponent } from '../../components/player-card/player-card.component';
import { SquadMember } from '../../models/squad.model';
import { ClearObservable } from '../../directives/clear-observable/clear-observable.directive';
import { Store } from '@ngrx/store';
import { selectLoadingSquad, selectTeamSquad } from '../../store/selectors';
import { takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team-squad',
  standalone: true,
  imports: [CommonModule, PlayerCardComponent],
  templateUrl: './team-squad.component.html',
  styleUrl: './team-squad.component.scss',
})
export class TeamSquadComponent extends ClearObservable implements OnInit {
  squad: SquadMember[] | null = null;
  skeletonSquad: number[] = new Array(12);

  constructor(private store: Store) {
    super();
  }

  selectedSquad$ = this.store.select(selectTeamSquad);
  selectedLoadingSquad$ = this.store.select(selectLoadingSquad);

  ngOnInit(): void {
    this.selectedSquad$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      if (data) this.squad = data[0].players;
    });
  }
}
