import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';


import { routing } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { CookieLawModule } from 'angular2-cookie-law';

// used for JSON schema driven forms
import { MaterialDesignFrameworkModule, NoFrameworkModule } from 'angular6-json-schema-form';

import {ButtonModule} from 'primeng/button';

import { PublicModule } from './public/public.module';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    routing,
    CookieLawModule,
    MaterialDesignFrameworkModule,
    NoFrameworkModule,

    // global primeng components
    ButtonModule,

    PublicModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }

    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
