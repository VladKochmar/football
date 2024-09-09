import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { FootballState } from '../store/state';
import { catchError, of, switchMap, take } from 'rxjs';
import { selectCurrentPlayer } from '../store/selectors';
import {
  loadPlayerById,
  loadPlayerTransfersHistory,
  loadTrophiesByHuman,
} from '../store/actions';

export const playerDetailsResolver: ResolveFn<boolean> = (route, state) => {
  const store = inject(Store<FootballState>);
  const playerId = Number(route.paramMap.get('playerId'));

  return store.select(selectCurrentPlayer).pipe(
    take(1),
    switchMap((player) => {
      const shouldLoadPlayer = !player || player.player.id !== playerId;

      if (shouldLoadPlayer && playerId) {
        store.dispatch(loadPlayerById({ playerId }));
        store.dispatch(loadPlayerTransfersHistory({ id: playerId }));
        store.dispatch(
          loadTrophiesByHuman({ id: playerId, humanType: 'player' }),
        );
      }

      return of(true);
    }),
    catchError(() => of(false)),
  );
};
