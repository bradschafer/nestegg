import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_guards';

import { HomeComponent } from './home/home.component';

import { LegalModule } from '../legal/legal.module';
import { PrivacyComponent } from '../legal/privacy/privacy.component';
import { TermsComponent } from '../legal/terms/terms.component';

import { LoginComponent, } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ForgotComponent } from './auth/forgot/forgot.component';

import { LandingComponent } from './demo/landing/landing.component';
import { PkHomeComponent } from './demo/paperkit/home.component';

const moduleRoutes: Routes = [
  { path: '', component: HomeComponent },
  // { path: '', loadChildren: './auth/auth.module#AuthModule' },

 { path: 'signup', component: SignupComponent },
 { path: 'login', component: LoginComponent },
 { path: 'forgot', component: ForgotComponent },

 { path: 'terms', component: TermsComponent },
 { path: 'privacy', component: PrivacyComponent },


  { path: 'docs', component: LandingComponent },
  { path: 'contactus', component: LandingComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'paperkit', component: PkHomeComponent },

  { path: 'not', outlet: 'rtbar', component: LandingComponent, },
  { path: 'sign', outlet: 'rtbar', component: PkHomeComponent, },
  { path: 'not', outlet: 'leftbar', component: LandingComponent, },
  { path: 'sign', outlet: 'leftbar', component: PkHomeComponent, }
];

@NgModule({
  imports: [
    RouterModule.forChild(moduleRoutes)
  ],
  exports: [RouterModule],
  providers: [
    AuthGuard
  ]
})
export class PublicRoutingModule { }
