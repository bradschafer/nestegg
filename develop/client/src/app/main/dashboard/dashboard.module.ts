import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// import { HomeComponent } from './home';
// import { LoginComponent } from './login';
// import { LandingComponent } from './landing/landing.component';
// import { NavbarComponent } from './shared/navbar/navbar.component';
// import { FooterComponent } from './shared/footer/footer.component';

const COMPONENTS = [
    // HomeComponent,
    // LoginComponent,
    // LandingComponent,
    // NavbarComponent,
    // FooterComponent
];


@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule // need this, or enter on form causes page reload instead of submit
    ],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
    entryComponents: [...COMPONENTS],
})
export class DashboardModule {
    // any constructor dependency injection goes into the contructor
    constructor() { }
}
