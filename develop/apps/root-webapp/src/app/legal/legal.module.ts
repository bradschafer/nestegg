import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TermsServiceComponent } from './terms/terms-service.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
import { LegalRoutingModule} from './legal-routing.module';

const COMPONENTS = [
  TermsComponent,
  TermsServiceComponent,
  PrivacyComponent,
];

@NgModule({
  imports: [
    CommonModule,
    LegalRoutingModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class LegalModule { }
