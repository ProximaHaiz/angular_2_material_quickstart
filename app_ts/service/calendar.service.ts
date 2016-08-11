import {Injectable} from '@angular/core';
import {Http, Response, Headers, URLSearchParams, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {API_URL} from './urls';
import {AbstractService} from './abstract.service';
import {OrderModel} from '../content/order/order';


import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


export interface myData {
  name:string;
}

@Injectable()
export class EventService extends AbstractService {
  constructor(private _http:Http) {
    super()
  }

  getEvents() {
    const eventsUrl = API_URL + 'events';
    // console.log('User send conf-pass:'+ user.reset_password);
    return this._http.get(eventsUrl)
      .map(res =>res.json())
      .catch(this._handleError)
  }

    CurrentDate() {
    const eventsUrl = API_URL + 'currentDate';
    // console.log('User send conf-pass:'+ user.reset_password);
    return this._http.get(eventsUrl)
      .map(res =>res.json())
      .catch(this._handleError)
  }
}

