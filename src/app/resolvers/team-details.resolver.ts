import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { FootballState } from '../store/state';
import { selectTeam } from '../store/selectors';
import { catchError, of, switchMap, take } from 'rxjs';
import { loadTeamInfoById } from '../store/actions';

export const teamDetailsResolver: ResolveFn<boolean> = (route, state) => {
  const store = inject(Store<FootballState>);
  const teamId = Number(route.paramMap.get('teamId'));

  return store.select(selectTeam).pipe(
    take(1),
    switchMap((team) => {
      const shouldLoad = !team || team.team.id !== teamId;

      if (shouldLoad && teamId) store.dispatch(loadTeamInfoById({ teamId }));

      return of(true);
    }),
    catchError(() => of(false)),
  );
};
