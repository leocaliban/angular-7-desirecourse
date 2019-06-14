import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
    }
]