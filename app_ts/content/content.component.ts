import {Component,OnInit, AfterContentInit, AfterViewInit,DoCheck} from '@angular/core';
import { ROUTER_DIRECTIVES, Router,CanActivate  } from '@angular/router';
import {SingleContentComponent} from './single_element/single-product.component';
import {Categories} from './categories/categories.component';

@Component({
    templateUrl:'app_ts/content/content.html',
    styleUrls:['src/css/content.css','src/css/carousel.css'],
    directives:[ROUTER_DIRECTIVES,Categories],  
})

export class ContentComponent   {
        categories: Categories[];
        errorMessage: string;
        message:string = 'message';
        contentsArray: string [];
    header: string;
    constructor(private _router: Router){}
    }