import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../../_services';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../_models';
import { first } from 'rxjs/operators';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    // encapsulation: ViewEncapsulation.None,
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    passValid = false;
    passwords = false;
    screen = 0;
    registration: User;
    returnUrl: string;
    error = '';


    jsonForm = {
        schema: {
            type: 'object',
            properties: {
                username: {
                    title: 'Username',
                    type: 'string',
                    required: true,
                    minLength: 4
                },
                email: {
                    title: 'Email',
                    type: 'string',
                    required: true,
                    minLength: 4
                },
                password: {
                    title: 'Password',
                    type: 'string',
                    required: true,
                    minLength: 3
                }
            }
        },
        options: {
            htmlStyle: 'btn-danger'
        },
        uiSchema: {
            password: { ui: '', widget: 'password' }
        },
        form: [
            'username',
            'email',
            'password',
            {
                type: 'actions',
                items: [
                    { type: 'submit', htmlClass: 'btn-block btn-round', color: 'primary', title: 'Next' },
                ]
            }
        ]
    };

    jsonForm2 = {
        schema: {
            type: 'object',
            properties: {
                firstName: {
                    title: 'First Name',
                    type: 'string',
                    minLength: 2
                },
                lastName: {
                    title: 'Last Name',
                    type: 'string',
                    minLength: 2
                },
                displayName: {
                    title: 'Display Name (optional)',
                    type: 'string',
                    minLength: 2
                }
            }
        },
        options: {
            htmlStyle: 'btn-danger'
        },
        uiSchema: {
        },
        form: [
            'firstName',
            'lastName',
            'displayName',
            {
                type: 'actions',
                items: [
                    { type: 'submit', htmlClass: 'btn-block btn-round', color: 'primary', title: 'Next' },
                ]
            }
        ]
    };


    onFormChanges(event) {
        this.passwords = event.pass1 && event.pass2;
        this.passValid = this.passwordsMatch(event.pass1, event.pass2);
    }

    passwordsMatch(pass1, pass2) {
        return pass1 && pass2 && pass1 === pass2;
    }

    onNext(event) {
        this.registration = event;
        this.screen = 1;
    }

    onInfo(event) {
        this.registration = Object.assign(event, this.registration);
        this.screen = 2;
    }

    onAccept(event) {

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';


        this.registration = Object.assign({
            fullName: this.registration.firstName + ' ' + this.registration.lastName,
            acceptedTerms: true,
            acceptedTermsAt: new Date()
        }, this.registration);
        this.authenticationService.register(this.registration)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error;

                });
    }

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() { }
}
