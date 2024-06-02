import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: 'landing',
    loadComponent: () =>
      import('./pages/landing/landing.component').then(
        (m) => m.LandingComponent
      ),
  },
  {
    path: 'trillo',
    loadComponent: () =>
      import('./pages/trillo/trillo.component').then((m) => m.TrilloComponent),
  },
  {
    path: 'nexter',
    loadComponent: () =>
      import('./pages/nexter/nexter.component').then((m) => m.NexterComponent),
  },
  { path: '**', redirectTo: 'landing' },
];
