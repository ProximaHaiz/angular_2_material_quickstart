import {Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

declare var jQuery:any;

@Component({
    selector: 'content',
    templateUrl: 'app_ts/components/content/template/content.html',
    directives:[ROUTER_DIRECTIVES],

})

export class ContentComponent implements OnInit{
private title:string;    

    ngOnInit(){
    jQuery(document).ready(function(){
    jQuery('ul.tabs').tabs();
    //  jQuery(document).location.hash.replace('#','');  
      
    })
    console.log(jQuery(document));
    console.log(jQuery(document)[0].URL)
    // jQuery(document)[0].location.hash.replace('#',''); 
    // URL.substr(document.URL.indexOf('#')+1) 

    }
}
    