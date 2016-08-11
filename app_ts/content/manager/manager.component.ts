import {Component, OnInit, ChangeDetectorRef, Input} from '@angular/core';
import {HTTP_PROVIDERS}    from '@angular/http';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import {
    Schedule, Button, InputText, Calendar, Dialog, Checkbox, TabPanel, TabView,
    CodeHighlighter
} from "primeng/primeng";
import {
     FormBuilder,
     Validators,
     FormControl,
     FormGroup, REACTIVE_FORM_DIRECTIVES
} from '@angular/forms';
import { OrderModel } from '../order/order';
import {  OrderService } from '../../service/order.service';
import { ManagerDTO } from './managerDTO';
import { Employee } from './interfaces/foreman';
import { Vehicle } from './interfaces/vehicle';


@Component({
    templateUrl: 'app_ts/content/manager/manager.html',
    directives: [Schedule, Button, InputText, Calendar,
                 Dialog, Checkbox, TabPanel, TabView,
                 Button, CodeHighlighter, ROUTER_DIRECTIVES,
                 REACTIVE_FORM_DIRECTIVES],
    providers: [HTTP_PROVIDERS,OrderService],
    
})

export class ManagerComponent implements OnInit {
        private sub: any;
        private id:number;
        private orders:ManagerDTO[];
        private errorMessage:string;
        private date:Date;
     
       constructor( private _router: Router,
                    private route: ActivatedRoute,
                    private _fb: FormBuilder,
                    private _orderService: OrderService){
                        

    }

      getOrders() {
    this._orderService.getOrder(this.id)
      .subscribe(
        categories=>{
            this.orders = categories;
            console.log('Driver:'+this.orders[0].drivers[0].firstName);
            console.log('Foreman:'+this.orders[0].foremans[0].firstName);
            console.log('Mover:'+this.orders[0].moverss[0].firstName);
            console.log('Vehicle:'+this.orders[0].vehicles[0].type); 
            console.log('Helper:'+this.orders[0].helpers[0].firstName);         
        },
        error=>this.errorMessage = <any>error
      )
  }

  ngOnInit(){
         console.log('ManagerDTO ngOnInit')
            this.sub = this.route.params.subscribe(params =>{
                let id = +params['id'];
                console.log("id="+id);
                this.id = id;
                this.getOrders();
            })
}   
}