import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {ContactComponent} from '../login/contact';
import {Categories} from '../content/categories/categories.component';
import { API_URL } from './urls';
import { AbstractService } from './abstract.service';
import { Address } from '../content/order/address/address';
import { SearchDistance } from '../content/order/utils/search-distance';


import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class GoogleApiService extends AbstractService{
    constructor(private _http: Http){super()}


    getDistance(searchDistance:SearchDistance){
        let mode='driving';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        console.log(searchDistance.loadingAddress[0].address)
        console.log(searchDistance.unloadingAddress[0].address)

            return this._http.post(API_URL+'distance',JSON.stringify(searchDistance),options)
                .map(res => res.json())
                .do(data => console.log('Data: ' + JSON.stringify(data)))
                .catch(this._handleError);  
    }
}


export interface DistanceResult{
    distance:string;
    destination:string;
}