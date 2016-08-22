import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';
import {
     FormControl,
     FormGroup, REACTIVE_FORM_DIRECTIVES 
} from '@angular/forms';
import{DataHandlerService} from '../service/data-handler.service';
import {Subject} from "rxjs/Subject";
import {UserServiceComponent} from "../service/user.service";

@Component({
    selector:'nav-bar',
    templateUrl:'app_ts/navbar/navbar.html',
    directives: [ROUTER_DIRECTIVES,REACTIVE_FORM_DIRECTIVES],
})

export class NavBarComponent implements OnInit{
    private searchField = new FormControl();
    private search:string;
    private searchStream = new Subject<string>();
    private errorMessage: string;
    
    constructor(private _dataHandlerService: DataHandlerService, public userService: UserServiceComponent){}
    
    
 ngOnInit(): any{
        this.searchStream
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => this._dataHandlerService.changeNav(term))
            .subscribe(
                content => '',
                error => this.errorMessage = <any>error
                    )
            }
            
  updateValue(){
              this.searchStream.next(this.searchField.value); 
        }
    public logout(){
        this.userService.goOut();
    };

}