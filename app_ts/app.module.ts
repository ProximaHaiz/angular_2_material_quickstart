import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule, FormsModule, provideForms} from "@angular/forms";
import {LocationStrategy, HashLocationStrategy} from "@angular/common";
import {AppComponent} from "./app.component";
import {LoginComponent} from "./components/login/login.component";
import {ContentComponent} from "./components/content/content.component";
import {HomeComponent} from "./components/content/home/home.component";
import {AboutTheProgramComponent} from "./components/content/about-the-programm/about-the-programm";
import {PartnerComponent} from "./components/content/partners/partners.component";
import {OfferComponent} from "./components/content/offers/offer.component";
import {HTTP_PROVIDERS} from "@angular/http";

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, FormsModule,
        RouterModule.forRoot([
            {path: '', component: ContentComponent},
            {path: 'login', component: LoginComponent},
            // {path: 'home', component: HomeComponent},
            {path: 'content', component: ContentComponent,
                children: [
                    {path: '', component: HomeComponent},
                    {path: 'home', component: HomeComponent},
                    {path: 'about', component: AboutTheProgramComponent},
                    {path: 'partners', component: PartnerComponent},
                    {path: 'offers', component: OfferComponent}
                ]
            },
        ])
    ],
    declarations: [AppComponent],
    providers: [
        provideForms(),
        // {provide: LocationStrategy, useClass: HashLocationStrategy}
        ],
    bootstrap: [AppComponent]
})
export class AppModule {
}


