import { Routes } from '@angular/router';
import { homeResolver } from './resolvers/home.resolver';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    resolve: { leagues: homeResolver },
  },
];
