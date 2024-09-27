import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { FootballState } from '../store/state';
import { selectTeamTransfers } from '../store/selectors';
import { catchError, of, switchMap, take } from 'rxjs';
import { loadTeamTransfersById } from '../store/actions';

export const transfersResolver: ResolveFn<boolean> = (route, state) => {
  const store = inject(Store<FootballState>);
  const teamId = route.parent?.paramMap.get('teamId');

  return store.select(selectTeamTransfers).pipe(
    take(1),
    switchMap((transfers) => {
      const shouldLoad =
        !transfers ||
        (transfers[0].transfers[0].teams.in.id !== teamId &&
          transfers[0].transfers[0].teams.out.id !== teamId);

      if (shouldLoad && teamId)
        store.dispatch(loadTeamTransfersById({ teamId }));

      return of(true);
    }),
    catchError(() => of(false)),
  );
};
