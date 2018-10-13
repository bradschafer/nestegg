import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuard } from '../_guards';

import { LoginComponent, } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotComponent } from './forgot/forgot.component';

const moduleRoutes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgot', component: ForgotComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(moduleRoutes)
  ],
  exports: [RouterModule],
  providers: [
    // AuthGuard
  ]
})
export class AuthRoutingModule { }
