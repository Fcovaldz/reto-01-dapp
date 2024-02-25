import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        loadComponent: () =>
        import('./home.component').then((page) => page.HomeComponent),
    },
    {
        path: 'settings',
        loadComponent: () =>
        import('./settings.component').then((page) => page.SettingsComponent),
    },
    {
        path: '**',
        redirectTo: '',
    },
];
