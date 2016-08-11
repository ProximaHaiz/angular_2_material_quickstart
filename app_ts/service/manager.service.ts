import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_URL } from './urls';
import { AbstractService } from './abstract.service';
import { ManagerDTO } from '../content/manager/managerDTO';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class ManagerService extends AbstractService{
    constructor(private _http: Http){super()}

        getOrder(){
        const eventsUrl = API_URL + 'order';
        // console.log('User send conf-pass:'+ user.reset_password);
        return this._http.get(eventsUrl)
        .map(res =>  <ManagerDTO[]>res.json())
        .catch(this._handleError)
    }
    
}