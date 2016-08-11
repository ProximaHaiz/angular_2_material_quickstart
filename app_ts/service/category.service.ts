import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {ContactComponent} from '../login/contact';
import {Categories} from '../content/categories/categories.component';
import { API_URL } from './urls';
import { AbstractService } from './abstract.service'

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CategoryServiceComponent extends AbstractService{
    constructor(private _http: Http){super()}


    getAllCategories(){
        const categoriesUrl = API_URL+'categories';
        return this._http.get(categoriesUrl)
            .map(res => <Categories[]>res.json())
            .do(data=>console.log(data+''+new Date().getMilliseconds()))
            .catch(this._handleError)
  } 
}