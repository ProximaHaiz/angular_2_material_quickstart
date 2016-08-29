import {Component, OnInit } from '@angular/core';

// declare var jQuery:any;
declare var jQuery:any;
@Component({
    selector: 'home-component',
    templateUrl: 'app_ts/components/content/home/template/home.html'
})

export class HomeComponent implements OnInit{
    ngOnInit(){

        // jQuery(document).ready(function(){
      jQuery('.parallax').parallax();
    // });
        
    }
}