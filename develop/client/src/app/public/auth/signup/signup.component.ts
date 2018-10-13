import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthenticationService } from '../../../_services';
import { User } from '../../../_models';

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
                pass1: {
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
            pass1: { ui: '', widget: 'password' }
        },
        form: [
            'username',
            'email',
            'pass1',
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
                fullname: {
                    title: 'Full Name',
                    type: 'string',
                    minLength: 2
                },
                displayname: {
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
            'fullname',
            'displayname',
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
        this.registration = Object.assign(event, this.registration);
        this.authenticationService.register(event);
    }

    constructor(
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() { }
}
