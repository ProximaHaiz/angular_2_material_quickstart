import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions, URLSearchParams} from "@angular/http";
import {API_URL} from "../../service/urls";
import {ManagerDTO} from "../manager/managerDTO";
import {AbstractService} from "../../service/abstract.service";
@Injectable()
export class CounterService extends AbstractService{
    constructor(private _http:Http){
        super();
    }

    private loginUrl = API_URL+'login';
    private headers = new Headers({ 'Content-Type': 'application/json' });
    private options = new RequestOptions({ headers: this.headers });

    public getData(id: number){

        let params = new URLSearchParams();
        params.set('orderId',id.toString());
        console.log("Getting order#"+id+" for counter");
        return this._http.get(API_URL+'orderForCounterAndOperator',{search: params})
            .map(res =>  res.json())
            .catch(this._handleError)
    };
    
    public updateData(data:string, id:number){
        
    };

}
