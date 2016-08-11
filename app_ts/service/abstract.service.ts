import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {ContactComponent} from '../login/contact';
import {Categories} from '../content/categories/categories.component';
import { API_URL } from './urls';

export abstract class AbstractService{
    constructor(){

    }

   protected  _handleError(error: any ) {
      // error = true;
      console.log("_handleError1: "+error.status); //gives the object object
      
    console.error("_handleError2"+error.json().errorMessage);
    return Observable.throw(error.json().errorMessage || 'Server error');
  }
}