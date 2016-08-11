import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {ContactComponent} from '../login/contact';
import {Categories} from '../content/categories/categories.component';
import { API_URL } from './urls';
import { AbstractService } from './abstract.service'

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class UserServiceComponent extends AbstractService{
     constructor(private _http: Http){super()}


        loginUser(user: ContactComponent){
            const loginUrl = API_URL+'login';
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            console.log('User send name:'+ user.username);
            console.log('User send pass:'+ user.password);
            // console.log('User send conf-pass:'+ user.reset_password);
            return this._http.post(loginUrl,JSON.stringify(user),options)
            .map(res => res.json())
            .catch(this._handleError);
    }

}