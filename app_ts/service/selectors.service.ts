import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {ContactComponent} from '../login/contact';
import {Categories} from '../content/categories/categories.component';
import { API_URL } from './urls';
import { AbstractService } from './abstract.service'

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


export interface myData {
   name:string;
}

@Injectable()
export class SelectorsService extends AbstractService{
    constructor(private _http: Http){super()}

    //  getAdvertisments() {
    //     return this._http.get("app_ts/data/advertisement.json")
    //         .map(res => res.json())
    //         .do(data => console.log(data))
    //         .catch(this._handleError);
    // }
}