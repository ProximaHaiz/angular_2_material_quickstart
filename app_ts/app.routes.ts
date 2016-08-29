import { provideRouter, RouterConfig } from '@angular/router';





export const routes: RouterConfig = [
    // { path: 'login', component: LoginComponent },
    // { path: 'login', component: LoginFormComponent },
    // { path: 'register', component: RegistrationFormComponent },
    // { path: 'adminPage' ,component: AdminPageComponent},
    // { path: 'content', component: LoginComponent,
    // children:[
    //           { path: '', component:  ScheduleDemo,                 canActivate: [ CanActivateViaAuthGuard] },
    //           { path: 'schedule', component:  ScheduleDemo ,        canActivate: [ CanActivateViaAuthGuard] },
    //           { path: 'order', component:  OrderComponent ,         canActivate: [ CanActivateViaAuthGuard] },
    //           { path: 'order/:id', component:  OrderComponent ,     canActivate: [ CanActivateViaAuthGuard] },
    //           { path: 'manager/:id', component:  ManagerComponent , canActivate: [ CanActivateViaAuthGuard] },
    //           { path: 'dashboard', component:  DashboardComponent , canActivate: [ CanActivateViaAuthGuard] },
    //            { path: 'email', component: EMailComponent ,         canActivate: [ CanActivateViaAuthGuard]},
    //           { path: 'orderList', component: OrderListComponent,   canActivate: [ CanActivateViaAuthGuard] },
    //           { path: 'counterManage/:id' , component: CounterManagerComponent, canActivate: [CanActivateViaAuthGuard]}
    //          ], canActivate: [ CanActivateViaAuthGuard]  }
];

export const APP_ROUTER_PROVIDERS = [
  // { path: '', component:  },
  provideRouter(routes)
];