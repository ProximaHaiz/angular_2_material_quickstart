/// <reference path="../typings/index.d.ts" />

import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {HTTP_PROVIDERS} from '@angular/http';
import {LoginComponent} from './components/login/login.component';
import {NavbarComponent} from './navbar/navbar';
import { FooterComponent} from './footer/footer.component';


@Component({
    selector: 'my-app',
    directives: [ROUTER_DIRECTIVES, LoginComponent, NavbarComponent, FooterComponent],
    template: `
        <div class="row" style="padding:0px; margin:0px;">
            <div class="col s12" style="padding:0px;">
                <navbar></navbar>

               <router-outlet></router-outlet>
            </div>
        </div>

        <footer></footer>

        


    `
    // providers:[HTTP_PROVIDERS],
})

export class AppComponent implements OnInit {
    constructor() {
    }


    ngOnInit() {

    }
}
