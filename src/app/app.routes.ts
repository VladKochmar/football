import { Routes } from '@angular/router';
import { homeResolver } from './resolvers/home.resolver';
import { contributionsResolver } from './resolvers/contributions.resolver';
import { standingsResolver } from './resolvers/standings.resolver';
import { currentLeagueResolver } from './resolvers/current-league.resolver';
import { leagueFixturesResolver } from './resolvers/league-fixtures.resolver';
import { playerDetailsResolver } from './resolvers/player-details.resolver';
import { teamDetailsResolver } from './resolvers/team-details.resolver';
import { squadResolver } from './resolvers/squad.resolver';
import { transfersResolver } from './resolvers/transfers.resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    resolve: {
      leagues: homeResolver,
      contributorsData: contributionsResolver,
    },
  },
  {
    path: 'league/:leagueId/:season',
    loadComponent: () =>
      import('./pages/league/league.component').then((m) => m.LeagueComponent),
    resolve: { currentLeague: currentLeagueResolver },
    children: [
      {
        path: 'standings',
        loadComponent: () =>
          import('./pages/standings/standings.component').then(
            (m) => m.StandingsPage,
          ),
        resolve: { standings: standingsResolver },
      },
      {
        path: 'statistics',
        loadComponent: () =>
          import('./pages/statistics/statistics.component').then(
            (m) => m.StatisticsComponent,
          ),
        resolve: { contributorsData: contributionsResolver },
      },
      {
        path: 'fixtures',
        loadComponent: () =>
          import('./pages/league-fixtures/league-fixtures.component').then(
            (m) => m.LeagueFixturesComponent,
          ),
        resolve: { fixtures: leagueFixturesResolver },
      },
    ],
  },
  {
    path: 'player/:playerId',
    loadComponent: () =>
      import('./pages/player-details/player-details.component').then(
        (m) => m.PlayerDetailsComponent,
      ),
    resolve: { player: playerDetailsResolver },
  },
  {
    path: 'team/:teamId',
    loadComponent: () =>
      import('./pages/team-details/team-details.component').then(
        (m) => m.TeamDetailsComponent,
      ),
    resolve: { team: teamDetailsResolver },
    children: [
      {
        path: 'squad',
        loadComponent: () =>
          import('./pages/team-squad/team-squad.component').then(
            (m) => m.TeamSquadComponent,
          ),
        resolve: { squad: squadResolver },
      },
      {
        path: 'transfers',
        loadComponent: () =>
          import('./pages/team-transfers/team-transfers.component').then(
            (m) => m.TeamTransfersComponent,
          ),
        resolve: { transfers: transfersResolver },
      },
    ],
  },
];
