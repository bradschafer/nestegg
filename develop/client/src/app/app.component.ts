import { Component, OnInit, Inject, Renderer, ElementRef, ViewChild, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
// import { Subscription } from 'rxjs/Subscription';
// import 'rxjs/add/operator/filter';
import { DOCUMENT } from '@angular/platform-browser';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';
import { AuthenticationService } from '../app/_services/authentication.service';

// import { NavbarComponent } from './public/index';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    // private _router: Subscription;
    //  @ViewChild(NavbarComponent) navbar: NavbarComponent;

    @Output() user;

    rtbar = false;
    leftbar = false;
    topbar = false;
    bottombar = false;

    constructor(
        private renderer: Renderer, private router: Router,
        @Inject(DOCUMENT) private document: any,
        private element: ElementRef,
        public location: Location,
        private authenticationService: AuthenticationService
        ) { }

    ngOnInit() {

        const navbar: HTMLElement = this.element.nativeElement.children[0].children[0];

        // this._router = this.router.events.filter(event => event instanceof NavigationEnd).subscribe((event: NavigationEnd) => {
        //     if (window.outerWidth > 991) {
        //         window.document.children[0].scrollTop = 0;
        //     }else{
        //         window.document.activeElement.scrollTop = 0;
        //     }
        //     this.navbar.sidebarClose();
        // });

        this.authenticationService.user$.subscribe(
            data => {
                if (data) {
                    this.user = data;
                }
            }
        );


        this.renderer.listenGlobal('window', 'scroll', (event) => {
            const number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            } else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });

        const ua = window.navigator.userAgent;
        const trident = ua.indexOf('Trident/');
        let version;
        if (trident > 0) {
            // IE 11 => return version number
            const rv = ua.indexOf('rv:');
            version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            const body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');

        }

    }

    removeFooter() {
        let titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        } else {
            return true;
        }
    }
}
