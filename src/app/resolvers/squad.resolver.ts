import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { FootballState } from '../store/state';
import { selectTeamSquad } from '../store/selectors';
import { catchError, of, switchMap, take } from 'rxjs';
import { loadSquadByTeamId } from '../store/actions';

export const squadResolver: ResolveFn<boolean> = (route, state) => {
  const store = inject(Store<FootballState>);
  const teamId = Number(route.parent?.paramMap.get('teamId'));

  return store.select(selectTeamSquad).pipe(
    take(1),
    switchMap((squad) => {
      const shouldLoad = !squad || squad[0].team.id !== teamId;

      if (shouldLoad && teamId) store.dispatch(loadSquadByTeamId({ teamId }));

      return of(true);
    }),
    catchError(() => of(false)),
  );
};
