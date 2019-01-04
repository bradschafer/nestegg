import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used for legal reasons
import { CookieLawModule } from 'angular2-cookie-law';

// used for JSON schema driven forms
import { MaterialDesignFrameworkModule, NoFrameworkModule } from 'angular6-json-schema-form';

// socket to api server
import { SocketIoModule, SocketIoConfig } from 'ng6-socket-io';
import { SocketService } from './_services/socket.service';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

// error capture service
import { SentryErrorHandler } from './_providers/sentryErrorHandler.provider';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import {ButtonModule} from 'primeng/button';

import { PublicModule } from './public/public.module';

const config: SocketIoConfig = { url: 'http://api.localhost', options: {} };


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
   // SocketIoModule.forRoot(config)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: ErrorHandler, useClass: SentryErrorHandler },
    SocketService
    // provider used to create fake backend
    // fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
