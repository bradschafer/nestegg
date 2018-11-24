import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TooltipModule } from 'primeng/tooltip';
import { MenubarModule } from 'primeng/menubar';

import { MaterialDesignFrameworkModule } from 'angular6-json-schema-form';

import { PublicRoutingModule } from './public-routing.module';

import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { LegalModule } from '../legal/legal.module';
import { AuthModule } from './auth/auth.module';


import { HomeComponent } from './home/home.component';

// For demo
import { PKHomeModule } from './demo/paperkit/home.module';
import { LandingComponent } from './demo/landing/landing.component';



const COMPONENTS = [
    HomeComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
];


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        MaterialDesignFrameworkModule,
        FormsModule, // need this, or enter on form causes page reload instead of submit

        LegalModule,
        AuthModule,
        PublicRoutingModule,

        MenubarModule,
        TooltipModule,
        PKHomeModule
    ],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
    entryComponents: [...COMPONENTS],
})
export class PublicModule {
    // any constructor dependency injection goes into the contructor
    constructor() { }
}
