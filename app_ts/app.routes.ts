import { provideRouter, RouterConfig } from '@angular/router';
import {LoginFormComponent} from './login/login.component';
import {ContentComponent} from './content/content.component';
import {RegistrationFormComponent} from './registration/registration.component';
import {SingleContentComponent} from './content/single_element/single-product.component';
import { ScheduleDemo } from './schedule/schedule.component';
import { OrderComponent } from './content/order/order.component';
import { ManagerComponent } from './content/manager/manager.component';
import { DashboardComponent } from './content/dashboard/dashboard.component';



export const routes: RouterConfig = [
    { path: '', component: LoginFormComponent },
    { path: 'login', component: LoginFormComponent },
    { path: 'register', component: RegistrationFormComponent },
    { path: 'content', component: ContentComponent,
    children:[
              { path: '', component:  ScheduleDemo },
              { path: 'schedule', component:  ScheduleDemo },
              { path: 'order', component:  OrderComponent },
              { path: 'manager/:id', component:  ManagerComponent },
              { path: 'dashboard', component:  DashboardComponent },
             ] }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];