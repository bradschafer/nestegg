import { Component, OnInit, OnChanges, ElementRef, ViewEncapsulation, Input } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

import { AuthenticationService } from '../../../_services';

import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class NavbarComponent implements OnInit, OnChanges {
    private toggleButton: any;
    private sidebarVisible: boolean;

    @Input() user;
    items;

    
    constructor(
        public location: Location,
        private element: ElementRef,
        private authenticationService: AuthenticationService
    ) {
        this.sidebarVisible = false;
    }

    isLoggedIn(): boolean  {
        return !!localStorage.getItem('currentUser') && !!localStorage.getItem('currentUser').length;
    }

    ngOnInit() {
        this.getItems();
    }

    ngOnChanges() {
        this.getItems();
    }

    getItems() {
        const navbar: HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this.items = [
            {
                icon: 'fas fa-envelope',
                title: 'Inbox',
                visible: this.isLoggedIn(),
                badge: '12',
                routerLink: [{ outlets: { rtbar: ['not'], leftbar: ['sign'] } }],
                command: (event) => {
                    // event.originalEvent: Browser event
                    // event.item: menuitem metadata
                    console.log(event.item);
                }
            },
            {
                icon: 'fas fa-bell',
                title: 'Notifications',
                visible: this.isLoggedIn(),
                badge: '1',
                routerLink: ['/notifications']
            },
            {
                label: 'John Doe',
                icon: 'fas fa-user',
                visible: this.isLoggedIn(),
                routerLink: ['/profile'],
                items: [
                    {
                        separator: true
                    },
                    {
                        label: 'Log out',
                        title: 'Click here to log out',
                        icon: 'fas fa-sign-out-alt',
                        visible: true,
                        // routerLink: ['/'],
                        command: (event) => {
                            this.authenticationService.logout();
                            this.getItems();
                        }
                    }
                ]
            },
            {
                icon: 'fas fa-book',
                title: 'Documentation',
                visible: true,
                routerLink: ['/docs']
            },
            {
                label: 'Sign in',
                icon: 'fas fa-sign-in-alt',
                visible: this.isLoggedIn() === false,
                routerLink: ['/login']
            },
            {
                label: 'Open Account',
                visible: this.isLoggedIn() === false,
                routerLink: ['/signup']
            }
        ];
    }

    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');

        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');

        this.sidebarVisible = true;
    }

    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    }

    sidebarToggle() {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    }

    isHome() {
        const titlee = this.location.prepareExternalUrl(this.location.path());
        return titlee === '/home';
    }

    isDocumentation() {
        const titlee = this.location.prepareExternalUrl(this.location.path());
        return titlee === '/documentation';
    }
}
