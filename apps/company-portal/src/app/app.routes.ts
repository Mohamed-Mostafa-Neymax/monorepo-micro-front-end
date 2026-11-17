import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const appRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        loadComponent: () => import('./features/home/home.component').then(comp => comp.HomeComponent),
        data: { title: 'Welcome back, John!' }
    },
    {
        path: 'app-one',
        loadComponent: () => loadRemoteModule('app-one-table', './Component-App-One').then(m => m.App),
        data: { title: 'App One - Records' }
    },
    {
        path: 'app-two',
        loadComponent: () => loadRemoteModule('app-two-info', './Component-App-Two').then(m => m.App),
        data: { title: 'App Two - Information' }
    },
    {
        path: 'app-three',
        loadComponent: () => loadRemoteModule('app-three-orders', './Component-App-Three').then(m => m.App),
        data: { title: 'App Three - Orders' }
    }
];