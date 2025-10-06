import { Routes } from '@angular/router';

import { authGuard } from './core/auth/auth.guard';
import { adminGuard } from './core/auth/admin/admin.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'login',
        loadComponent: () => import('./core/auth/login/login')
    },
    {
        path: 'home',
        loadComponent: () => import('./features/home/home'),
        canActivate: [authGuard]
    },
    {
        path: 'products',
        loadComponent: () => import('./features/products/products'),
        canActivate: [authGuard]
    },
    {
        path: 'contact',
        loadComponent: () => import('./features/contact/contact'),
        canActivate: [authGuard]
    },
    {
        path: 'about',
        loadComponent: () => import('./features/about/about'),
        canActivate: [authGuard]
    },
    // Admin routes
    {
        path: 'admin/dashboard',
        loadComponent: () => import('./core/auth/admin/dashboard/dashboard'),
        canActivate: [authGuard, adminGuard]
    },
    {
        path: 'admin/users',
        loadComponent: () => import('./core/auth/admin/users/users'),
        canActivate: [authGuard, adminGuard]
    },
    {
        path: 'admin/settings',
        loadComponent: () => import('./core/auth/admin/settings/settings'),
        canActivate: [authGuard, adminGuard]
    },
    {
        path: 'admin/reports',
        loadComponent: () => import('./core/auth/admin/reports/reports'),
        canActivate: [authGuard, adminGuard]
    },
    { path: '**', redirectTo: '/login' },

    /* { path: '', redirectTo: '/home', pathMatch: 'full' }, */
    { path: 'home', loadComponent: () => import('./features/home/home') },
    /* { path: '**', redirectTo: '/home' } */

];