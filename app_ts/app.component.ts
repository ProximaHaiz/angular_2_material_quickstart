/// <reference path="../typings/index.d.ts" />

import {Component,OnInit} from '@angular/core';
import {LoginFormComponent} from './login/login.component';
import { ROUTER_DIRECTIVES} from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import{ContentComponent} from './content/content.component';
import {RegistrationFormComponent} from './registration/registration.component';
import {SingleContentComponent} from './content/single_element/single-product.component';
import {NavBarComponent} from './navbar/nav-bar.component'

@Component({
    selector: 'my-app',
    template: `
    <nav-bar></nav-bar>

        <div class="container spaces main-page-container-fluid col-md-12">
            <router-outlet></router-outlet>
        </div>
            
<div class="navbar-fixed-bottom row-fluid">
    <div class="navbar-inner">
          <div class="container">
          <p class="text-muted text-center">Developed by Karpov Vladimir, 2016 </p>
          </div>
    </div>
</div>
    `,
    directives: [ROUTER_DIRECTIVES,NavBarComponent],
    providers:[HTTP_PROVIDERS],     
})

export class AppComponent {
   constructor(){}               
}
