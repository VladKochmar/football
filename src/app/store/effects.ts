import { Injectable } from '@angular/core';
import { FootballService } from '../services/football/football.service';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as FootballActions from './actions';
import { catchError, map, of, switchMap } from 'rxjs';
import { HumansService } from '../services/humans/humans.service';

@Injectable()
export class FootballEffects {
  constructor(
    private actions$: Actions,
    private footballService: FootballService,
    private humansService: HumansService,
  ) {}

  // Leagues
  loadLeagues$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FootballActions.loadLeagues),
      switchMap(() => {
        return this.footballService.loadLeagues().pipe(
          map((leagues) => {
            return FootballActions.loadLeaguesSuccess({
              leagues: leagues.response,
            });
          }),
          catchError((error) =>
            of(FootballActions.loadLeaguesFailure({ error })),
          ),
        );
      }),
    ),
  );

  loadLeagueById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FootballActions.loadLeagueById),
      switchMap(({ leagueId }) => {
        return this.footballService.loadLeagues(leagueId).pipe(
          map((league) => {
            return FootballActions.loadLeagueByIdSuccess({
              currentLeague: league.response[0],
            });
          }),
          catchError((error) =>
            of(FootballActions.loadLeagueByIdFailure({ error })),
          ),
        );
      }),
    ),
  );

  // Top Contributions
  loadTopScorers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FootballActions.loadTopScorers),
      switchMap(({ leagueId, season }) => {
        return this.humansService.loadTopScorers(leagueId, season).pipe(
          map((topScorers) => {
            return FootballActions.loadTopScorersSuccess({
              topScorers: topScorers.response,
            });
          }),
          catchError((error) =>
            of(FootballActions.loadTopScorersFailure({ error })),
          ),
        );
      }),
    ),
  );

  loadTopAssists$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FootballActions.loadTopAssists),
      switchMap(({ leagueId, season }) => {
        return this.humansService.loadTopAssists(leagueId, season).pipe(
          map((topAssists) => {
            return FootballActions.loadTopAssistsSuccess({
              topAssists: topAssists.response,
            });
          }),
          catchError((error) =>
            of(FootballActions.loadTopAssistsFailure({ error })),
          ),
        );
      }),
    ),
  );

  // Standings
  loadStandings$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FootballActions.loadStandings),
      switchMap(({ leagueId, season }) => {
        return this.footballService.loadStandings(leagueId, season).pipe(
          map((standings) => {
            return FootballActions.loadStandingsSuccess({
              leagueStandings: standings.response,
            });
          }),
          catchError((error) =>
            of(FootballActions.loadStandingsFailure({ error })),
          ),
        );
      }),
    ),
  );

  // Fixtures
  loadLeagueFixtures$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FootballActions.laodLeagueFixtures),
      switchMap(({ leagueId, season }) => {
        return this.footballService.loadLeagueFixtures(leagueId, season).pipe(
          map((fixtures) => {
            return FootballActions.laodLeagueFixturesSuccess({
              leagueFixtures: fixtures.response,
            });
          }),
          catchError((error) =>
            of(FootballActions.loadLeagueFixturesFailure({ error })),
          ),
        );
      }),
    ),
  );

  // Players
  loadPlayerById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FootballActions.loadPlayerById),
      switchMap(({ playerId }) => {
        return this.humansService.loadPlayerById(playerId).pipe(
          map((player) => {
            return FootballActions.loadPlayerByIdSuccess({
              currentPlayer: player.response[0],
            });
          }),
          catchError((error) =>
            of(FootballActions.loadPlayerByIdFailure({ error })),
          ),
        );
      }),
    ),
  );

  loadTrophiesByHuman$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FootballActions.loadTrophiesByHuman),
      switchMap(({ id, humanType }) => {
        return this.humansService.loadTrophiesByHuman(id, humanType).pipe(
          map((trophies) => {
            return FootballActions.loadTrophiesByHumanSuccess({
              trophies: trophies.response,
            });
          }),
          catchError((error) =>
            of(FootballActions.loadTrophiesByHumanFailure({ error })),
          ),
        );
      }),
    ),
  );

  loadPlayerTransfersHistory$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FootballActions.loadPlayerTransfersHistory),
      switchMap(({ id }) => {
        return this.humansService.loadPlayerTransfersHistory(id).pipe(
          map((transfers) => {
            return FootballActions.loadPlayerTransfersHistorySuccess({
              transfers: transfers.response,
            });
          }),
          catchError((error) =>
            of(FootballActions.loadPlayerTransfersHistoryFailure({ error })),
          ),
        );
      }),
    ),
  );

  // Team
  loadTeamInfoById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FootballActions.loadTeamInfoById),
      switchMap(({ teamId }) => {
        return this.footballService.loadTeamInfoById(teamId).pipe(
          map((team) => {
            return FootballActions.loadTeamInfoByIdSuccess({
              team: team.response[0],
            });
          }),
          catchError((error) =>
            of(FootballActions.loadTeamInfoByIdFailure({ error })),
          ),
        );
      }),
    ),
  );

  loadSquadByTeamId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FootballActions.loadSquadByTeamId),
      switchMap(({ teamId }) => {
        return this.footballService.loadSquadByTeamId(teamId).pipe(
          map((teamSquad) => {
            return FootballActions.loadSquadByTeamIdSuccess({
              teamSquad: teamSquad.response,
            });
          }),
          catchError((error) =>
            of(FootballActions.loadSquadByTeamIdFailure({ error })),
          ),
        );
      }),
    ),
  );

  loadTeamTransfersById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FootballActions.loadTeamTransfersById),
      switchMap(({ teamId }) => {
        return this.footballService.loadTeamTransfersById(teamId).pipe(
          map((teamTransfers) => {
            return FootballActions.loadTeamTransfersByIdSuccess({
              teamTransfers: teamTransfers.response,
            });
          }),
          catchError((error) =>
            of(FootballActions.loadTeamTransfersByIdFailure({ error })),
          ),
        );
      }),
    ),
  );
}
