import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialDesignFrameworkModule } from 'angular6-json-schema-form';

import { AuthRoutingModule } from './auth-routing.module';
import { LegalModule } from '../../legal/legal.module';

import { LoginComponent } from './login/login.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SignupComponent } from './signup/signup.component';



const COMPONENTS = [
  LoginComponent,
  SignupComponent,
  ForgotComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MaterialDesignFrameworkModule,
    LegalModule,
    AuthRoutingModule
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class AuthModule { }
