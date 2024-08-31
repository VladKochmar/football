import { Routes } from '@angular/router';
import { homeResolver } from './resolvers/home.resolver';
import { contributionsResolver } from './resolvers/contributions.resolver';
import { standingsResolver } from './resolvers/standings.resolver';

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
    resolve: { standings: standingsResolver },
  },
];
