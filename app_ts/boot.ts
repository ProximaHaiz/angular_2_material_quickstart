
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from "./app.component";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {provide} from '@angular/core' ;
// import {LocationStrategy, Location, HashLocationStrategy } from '@angular/router';

import {HTTP_PROVIDERS} from "@angular/http";
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { disableDeprecatedForms, provideForms} from '@angular/forms';
import{CategoryServiceComponent} from './service/category.service';
import{UserServiceComponent} from './service/user.service';
import {CanActivateViaAuthGuard} from "./content/e-mail/routesGuard";

import{DataHandlerService} from './service/data-handler.service';
import 'rxjs/Rx';

/**
 * All classes will use the same instances of following providers elements
 */
// provide(LocationStrategy, {useClass: HashLocationStrategy}
bootstrap(AppComponent, [
                         HTTP_PROVIDERS,
                         APP_ROUTER_PROVIDERS,
                         DataHandlerService,
                         disableDeprecatedForms(),
                         provideForms(),
                         CategoryServiceComponent,
                         UserServiceComponent,
                         CanActivateViaAuthGuard,
                         provide(LocationStrategy, {useClass: HashLocationStrategy}
                         ])
    .catch(err => console.error(err));
