import {Component, OnInit } from '@angular/core';
declare var jQuery:any;

@Component({
    // moduleId:'',
    selector: 'login',
    templateUrl: 'app_ts/components/login/template/login.html'
})



export class LoginComponent implements OnInit  {
  name: string = 'Angular2 User';
  private date:string;


  ngOnInit(){
      jQuery('select').material_select();   
      jQuery('.datepicker').pickadate({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15 // Creates a dropdown of 15 years to control year
    }); 
    jQuery(document).ready(function() {
    jQuery('#loginForm').css('visibility', 'visible')
    })
   
   }  
   
   change(){
     console.log('date change')
   }

   inputChange(){
      console.log('input change')
   }




}