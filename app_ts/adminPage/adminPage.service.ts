import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {API_URL} from "../service/urls";

@Injectable()
export class AdminPostService{
    
    private postUrl: string;
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });
    
    constructor(private _http: Http){
        this.postUrl = API_URL+'vehicle';
    }
    
    public postData(jsonData: string){
        this._http.post(this.postUrl , jsonData, this.options);
    };
}

