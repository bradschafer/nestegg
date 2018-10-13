import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../_guards';

import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';


const moduleRoutes: Routes = [
 { path: 'terms', component: TermsComponent },
 { path: 'terms-of-service', component: TermsComponent },
 { path: 'acceptable-use-policy', component: TermsComponent },
 { path: 'privacy', component: PrivacyComponent },
 { path: 'privacy-policy', component: PrivacyComponent },
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
export class LegalRoutingModule { }
