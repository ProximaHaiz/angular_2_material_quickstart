
import {bootstrap} from '@angular/platform-browser-dynamic';
import {AppComponent} from "./app.component";
import {HTTP_PROVIDERS} from "@angular/http";
import { APP_ROUTER_PROVIDERS } from './app.routes';
import { disableDeprecatedForms, provideForms} from '@angular/forms';
import{CategoryServiceComponent} from './service/category.service';
import{UserServiceComponent} from './service/user.service';
import {CanActivateViaAuthGuard} from "./content/e-mail/routesGuard";

import{DataHandlerService} from './service/data-handler.service';
import 'rxjs/Rx';
import {LocationStrategy, HashLocationStrategy} from "@angular/common";

/**
 * All classes will use the same instances of following providers elements
 */
bootstrap(AppComponent, [
                         HTTP_PROVIDERS,
                         APP_ROUTER_PROVIDERS,
                         DataHandlerService,
                         disableDeprecatedForms(),
                         provideForms(),
                         CategoryServiceComponent,
                         UserServiceComponent,
                         CanActivateViaAuthGuard
                         ])
    .catch(err => console.error(err));
