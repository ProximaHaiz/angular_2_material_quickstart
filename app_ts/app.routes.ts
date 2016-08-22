import { provideRouter, RouterConfig } from '@angular/router';
import {LoginFormComponent} from './login/login.component';
import {ContentComponent} from './content/content.component';
import {RegistrationFormComponent} from './registration/registration.component';
import {SingleContentComponent} from './content/single_element/single-product.component';
import { ScheduleDemo } from './schedule/schedule.component';
import { OrderComponent } from './content/order/order.component';
import { ManagerComponent } from './content/manager/manager.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';
import {EMailComponent} from "./content/e-mail/e-mail.component";
import {CanActivateViaAuthGuard} from "./content/e-mail/routesGuard"
import {OrderListComponent} from "./content/orderList/orderList.component";
import {AdminPageComponent} from "./adminPage/adminPage.component";
import {CounterManagerComponent} from "./content/counter/counterManage.component";



export const routes: RouterConfig = [
    { path: '', component: LoginFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'register', component: RegistrationFormComponent },
    { path: 'adminPage' ,component: AdminPageComponent},
    { path: 'content', component: ContentComponent,
    children:[
              { path: '', component:  ScheduleDemo,                 canActivate: [ CanActivateViaAuthGuard] },
              { path: 'schedule', component:  ScheduleDemo ,        canActivate: [ CanActivateViaAuthGuard] },
              { path: 'order', component:  OrderComponent ,         canActivate: [ CanActivateViaAuthGuard] },
              { path: 'order/:id', component:  OrderComponent ,     canActivate: [ CanActivateViaAuthGuard] },
              { path: 'manager/:id', component:  ManagerComponent , canActivate: [ CanActivateViaAuthGuard] },
              { path: 'dashboard', component:  DashboardComponent , canActivate: [ CanActivateViaAuthGuard] },
               { path: 'email', component: EMailComponent ,         canActivate: [ CanActivateViaAuthGuard]},
              { path: 'orderList', component: OrderListComponent,   canActivate: [ CanActivateViaAuthGuard] },
              { path: 'counterManage/:id' , component: CounterManagerComponent, canActivate: [CanActivateViaAuthGuard]}
             ], canActivate: [ CanActivateViaAuthGuard]  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];