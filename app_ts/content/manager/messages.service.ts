import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import {API_URL} from "../../service/urls";
import {AbstractService} from "../../service/abstract.service";
@Injectable()
export class MessagesService extends AbstractService{
    constructor(private _http: Http){
        super();
    }
    
    public sendMessage(data: string){
        const loginUrl = 'http://royal.us-west-2.elasticbeanstalk.com/smsSent';
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });

        return this._http.post(loginUrl,data,options)
            .map(res => console.log(res.json()))
            .catch(this._handleError);
    }
    
    public checkService(id: number){
        let params = new URLSearchParams();
        params.set('orderId',id.toString());

        const loginUrl = 'http://royal.us-west-2.elasticbeanstalk.com/smsGet';
        return this._http.get(loginUrl, {search: params})
            .map(res => res.json())
            .catch(this._handleError);
    };
}
