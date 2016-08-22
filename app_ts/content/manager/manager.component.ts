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
import {MessagesService} from "./messages.service";
import {Observable} from "rxjs/Rx";
import 'rxjs/add/observable/interval';
import {IntervalObservable} from 'rxjs/Observable/IntervalObservable'

declare var jQuery:any;

class SentMessage{

    private class:string = 'danger';

    constructor(
        private _orderService:OrderService,
        public fullName: string,
        public phone: string,
        public isConfirm: boolean
    ){};

    public checkStatus() {


       /* let obs = IntervalObservable.create(1000).take(10).map((x) =>{
           // console.log("Sending request to: "+this.fullName)
            this._orderService.getOrder(69)
                .subscribe(
                    categories=>{
                        console.log(categories);
                    },
                    error=>console.log('Error '+ error)
                )
            if(x == 5) {
                console.log("confirm");
                this.isConfirm = true;
                this.class = 'success';
            }
        })
         obs.subscribe();

         */

        let timer = Observable.interval(500).subscribe((num)=> {
            num++;
            if(num == 6) this.isConfirm = true;
            else {
                this._orderService.getOrder(69)
                    .subscribe(
                        categories=>{
                            console.log(categories);
                        },
                        error=>console.log('Error '+ error)
                    );
            }

            if(this.isConfirm) timer.unsubscribe();
        });


    };
}

@Component({
    templateUrl: 'app_ts/content/manager/manager.html',
    directives: [Schedule, Button, InputText, Calendar,
                 Dialog, Checkbox, TabPanel, TabView,
                 Button, CodeHighlighter, ROUTER_DIRECTIVES,
                 REACTIVE_FORM_DIRECTIVES],
    providers: [HTTP_PROVIDERS,OrderService, MessagesService],
    
})


//реализовать высвечивание новых ответов сообщений
export class ManagerComponent implements OnInit {
        private sub: any;
        private id:number;
        private orders:ManagerDTO[];
        private errorMessage:string;
        private date:Date;
        private modalInfo:ModalInfo ;
     
        private orderForm: FormGroup;

        private sentMessages: SentMessage[];
    
        public newAnswers: number = 0;
    
       constructor( private _router: Router,
                    private route: ActivatedRoute,
                    private _fb: FormBuilder,
                    private _orderService: OrderService,
                    private _messagesService: MessagesService){

           this.orderForm = this._fb.group({
               'helpers':this._fb.array([
                   this.initHelpers(),
               ]),
           });

           this.sentMessages = [];

       }

    private helperTest:string = 'Bob Smith';
    private initHelpers(){
        return this._fb.group({
            helper: [this.helperTest, Validators.required]
        });
    };

 

  public addressFrom(title:string, data:string){
    this.modalInfo.title = title;
    this.modalInfo.data = data;
    // $('#myModal').modal('toggle');
  };

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

    public sendMessage(type: string, select: any){
        let _obj = {
            fullName: null,
            phone: null
        };
        let object = {
            employeType: null,
            orderId: this.id,
            employeId: null
        };
        switch (type){
            case 'Foreman':{
                object.employeId = this.orders[0].foremans[select].id;
                object.employeType = 'Forman';
                _obj.fullName = this.orders[0].foremans[select].firstName + this.orders[0].foremans[select].lastName;
                _obj.phone = this.orders[0].foremans[select].phone;
            }
                break;
            case 'Driver':{
                object.employeId = this.orders[0].drivers[select].id;
                object.employeType = 'Driver';
                _obj.fullName = this.orders[0].drivers[select].firstName + this.orders[0].drivers[select].lastName;
                _obj.phone = this.orders[0].drivers[select].phone;
            }break;
            case 'Mover': {
                object.employeId = this.orders[0].moverss[select].id;
                object.employeType = 'Mover';
                _obj.fullName = this.orders[0].moverss[select].firstName + this.orders[0].moverss[select].lastName;
                _obj.phone = this.orders[0].drivers[select].phone;
            }
                break;
            case 'Helper': {
                object.employeId = this.orders[0].helpers[select].id;
                object.employeType = 'Helper';
                _obj.fullName = this.orders[0].helpers[select].firstName + this.orders[0].helpers[select].lastName;
                _obj.phone = this.orders[0].helpers[select].phone;
            }
                break;
        }

        let message: SentMessage = new SentMessage(this._orderService,_obj.fullName, _obj.phone, false);
      
       // message.checkStatus();
        
        this._messagesService.sendMessage(JSON.stringify(object)).subscribe(
            data=>{
                console.log('Message sent!');
                let message: SentMessage = new SentMessage(this._orderService,_obj.fullName, _obj.phone, false);
                this.sentMessages.push(message)
            },
            error=> console.log('Error in sending  message'+error)
        );
    

        // this._messagesService.checkService(this.id).subscribe((data)=>{
        //     console.log(data);
        // });
        
    };

  ngOnInit(){
      this.modalInfo = new ModalInfo();
         console.log('ManagerDTO ngOnInit')
            this.sub = this.route.params.subscribe(params =>{
                let id = +params['id'];
                console.log("id="+id);
                this.id = id;
                this.getOrders();
            })
}
    private openModal(){
             this._messagesService.checkService(this.id).subscribe((data)=>{
                 this.sentMessages = data;
                  jQuery('#myModal').modal('show');
            console.log(data);
        });
        
       

    };

    private getTrClass(status: boolean):string{
        console.log('Boolean:'+status)
        if(status) return 'success';
        else return 'danger';
    };
}

    export  class ModalInfo {
        title:string;
        data: string;
  };