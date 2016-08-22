import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { API_URL } from './urls';
import { AbstractService } from './abstract.service';
import { OrderModel } from '../content/order/order';
import { ManagerDTO } from '../content/manager/managerDTO';
import {Vehicle} from '../content/order/interfaces/vehicle';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {UserServiceComponent} from "./user.service";


export interface myData {
   name:string;
}

@Injectable()
export class OrderService extends AbstractService{
    constructor(private _http: Http, private userService: UserServiceComponent){super()}

    saveOrder(order: OrderModel){
            const loginUrl = API_URL+'order';
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            // console.log('User send conf-pass:'+ user.reset_password);
            return this._http.post(loginUrl,JSON.stringify(order),options)
            .map(res => res.json())
            .catch(this._handleError);
    }

    getOrder(id:number){
        //Operator
        if(this.userService.user.position == 0){
            //For operator from Order page
            
            /*let params2:any = new URLSearchParams();
            params2.set('orderId',id.toString());
            params2.set('role', 'Operator');
            return this._http.get(API_URL+'order',{search: params2})
                .map(res =>  <ManagerDTO[]>res.json())
                .catch(this._handleError)
                */

            let params = new URLSearchParams();
            params.set('orderId',id.toString());
            return this._http.get(API_URL+'orderForCounterAndOperator',{search: params})
                .map(res =>  res.json())
                .catch(this._handleError)

        }else{
            let params = new URLSearchParams();
            params.set('orderId',id.toString());

            // console.log('User send conf-pass:'+ user.reset_password);
            return this._http.get(API_URL+'order',{search: params})
                .map(res =>  <ManagerDTO[]>res.json())
                .catch(this._handleError)
        }
    }

     considerPriceCategory(date:string){
           let params = new URLSearchParams();
             params.set('date',date.toString());
      
        // console.log('User send conf-pass:'+ user.reset_password);
        return this._http.get(API_URL+'order/categoryPrice',{search: params})
        .map(res =><Vehicle>res.json())
        .catch(this._handleError)
   }
   getOrderCountStatuses(){
             return this._http.get(API_URL+'orderCount')
        .map(res =>res.json())
        .catch(this._handleError)
   }
    
    public sentMessage(urlAdd: string, data: string){

        console.log('Sent: '+data);

        const loginUrl = API_URL+urlAdd;
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        // console.log('User send conf-pass:'+ user.reset_password);
        return this._http.post(loginUrl,data,options)
            .map(res => console.log(res.json()))
            .catch(this._handleError);
    };

}