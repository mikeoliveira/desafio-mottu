import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'personagens',
    loadComponent: () =>
      import('@desafio-mottu/personagens').then((m) => m.PersonagensComponent),
  },
];
