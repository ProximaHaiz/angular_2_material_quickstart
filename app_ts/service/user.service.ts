import {Injectable, OnInit} from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {ContactComponent} from '../login/contact';
import {Categories} from '../content/categories/categories.component';
import { API_URL } from './urls';
import { AbstractService } from './abstract.service'

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import {Router} from "@angular/router";

enum Positions {Operator, Manager, Administrator, Counter, Member}

class User{
  constructor(
    public username: string,
    public email:string,
    public isLoggin:boolean,
    public position:Positions,
    public customerId: number
  ){}
}

@Injectable()
export class UserServiceComponent extends AbstractService{

  private _localStorageKey:string = '_0x903user_$_auth_00_1';

  public user: User;

     constructor(private _http: Http, private router: Router){
       super();
       if(localStorage.getItem(this._localStorageKey) == null) this.user = new User(null,null,null , null,null);
       else this.user = JSON.parse( localStorage.getItem(this._localStorageKey) );
     }


        loginUser(user: ContactComponent){

          this.user.username = user.username;
          this.user.isLoggin = true;

          switch (user.username){
            case 'operator': this.user.position = Positions.Operator;
              this.user.customerId = 1;
              this.router.navigate(['/content']);
              break;
            case 'manager': this.user.position = Positions.Manager;
              this.user.customerId = 2;
                this.router.navigate(['/content/orderList']);
              break;
            case 'admin': this.user.position = Positions.Administrator;
              this.user.customerId = 4;
              this.router.navigate(['/adminPage']);
                  break;
            case 'counter': this.user.position = Positions.Counter;
              this.user.customerId = 3;
              this.router.navigate(['/content']);
                  break;
            default: this.user.position = Positions.Member;
              break;
          }

          localStorage.setItem(this._localStorageKey , JSON.stringify(this.user));

          console.log('User: '+this.user.username);
          console.log('Position: '+this.user.position);

           /* const loginUrl = API_URL+'login';
            let headers = new Headers({ 'Content-Type': 'application/json' });
            let options = new RequestOptions({ headers: headers });
            console.log('User send name:'+ user.username);
            console.log('User send pass:'+ user.password);
            // console.log('User send conf-pass:'+ user.reset_password);
            return this._http.post(loginUrl,JSON.stringify(user),options)
            .map(res => res.json())
            .catch(this._handleError);
            */
    }
  
  public goOut(){
    this.user = new User('','', false , Positions.Member, null);
    localStorage.removeItem(this._localStorageKey);
    this.router.navigate(['/login'])
  };
}
