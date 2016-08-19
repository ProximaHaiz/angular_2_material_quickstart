import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()

export class EMailRecieverService{
  private dataPath: string = '';
  constructor(private http: Http){}

  public getEMails(){
    return this.http.get(this.dataPath).map((res:Response) => res.json());
  };
}
