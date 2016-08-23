import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";
import {API_URL} from "../../service/urls";

@Injectable()

export class EMailRecieverService{
  private dataPath: string = API_URL+'emails2';
  constructor(private http: Http){}

  public getEMails(){
    return this.http.get(this.dataPath).map((res:Response) => res.json());
  };
}
