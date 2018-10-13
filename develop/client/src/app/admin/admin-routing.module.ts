import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent} from './admin.component';
import { UsersComponent} from './users/users.component';
import { RolesComponent } from './roles/roles.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'users', component: UsersComponent },
  { path: 'roles', component: RolesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
