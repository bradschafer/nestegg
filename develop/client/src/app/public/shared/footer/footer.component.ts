import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    test: Date = new Date();

    constructor(public location: Location) { }

    ngOnInit() {}


    isHome() {
        const titlee = this.location.prepareExternalUrl(this.location.path());
        return titlee === '/home';
    }
    isDocumentation() {
        const titlee = this.location.prepareExternalUrl(this.location.path());
        return titlee === '/documentation';
    }
}
