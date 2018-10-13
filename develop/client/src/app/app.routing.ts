import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    // try to include only lazy loaded routes so you can have a modular front end.
    { path: '', loadChildren: './public/public.module#PublicModule' },
    { path: 'main', loadChildren: './main/main.module#MainModule' },
    { path: 'admin', loadChildren: './admin/admin.module#AdminModule' },
    { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
