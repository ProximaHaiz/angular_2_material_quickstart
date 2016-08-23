import {Component, OnInit, ChangeDetectorRef, Input} from '@angular/core';
import {HTTP_PROVIDERS}    from '@angular/http';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {
    Schedule, Button, InputText, Calendar, Dialog, Checkbox, TabPanel, TabView,
    CodeHighlighter,Dropdown,SplitButton,SplitButtonItem,MultiSelect,UIChart
} from "primeng/primeng";
import {
     FormBuilder,
     Validators,
     FormControl,
     FormGroup, REACTIVE_FORM_DIRECTIVES
} from '@angular/forms';
import { OrderService } from '../../service/order.service';
import {EventService} from "../../service/calendar.service";
import {OrderStatusString} from "../../schedule/utils/order-status-string";
import {OrderCountStatus} from "../order/interfaces/order-count-status";
import {UserServiceComponent} from "../../service/user.service";



@Component({
    templateUrl: 'app_ts/content/dashboard/dashboard.html',
    directives: [Schedule, Button, InputText, Calendar,
                 Dialog, Checkbox, TabPanel, TabView,
                 Button, CodeHighlighter,SplitButton,
                 SplitButtonItem,MultiSelect,UIChart, ROUTER_DIRECTIVES,
                 REACTIVE_FORM_DIRECTIVES],
    providers: [HTTP_PROVIDERS,OrderService, EventService],
})

export class DashboardComponent  implements OnInit{
   
        data: any;
        options: any;
    private orderStatusString:OrderStatusString;
    private orderCountStatus:OrderCountStatus;

    private COMPLETED:string ='Completed';
    private BOOKED:string = 'Booked';
    private IN_PROGRESS = 'In progress';
    private SOLD:string= 'Sold';
    private LOST:string= 'Lost';

//booked - забронировано
    constructor(private _eventService:EventService,
        public userService: UserServiceComponent) {
        this.initOrderByStatusString();

        this.orderCountStatus = new OrderCountStatus();
        this.orderStatusString.completed = this.COMPLETED;
        this.orderStatusString.booked = this.BOOKED;
        this.orderStatusString.inProgress = this.IN_PROGRESS;
        this.orderStatusString.sold = this.SOLD;
        // this.orderCountStatus.lost = this.LOST;
       this.orderStatusString.lost = this.LOST;

       console.log(JSON.stringify(this.orderStatusString))
        this._eventService.getEventsByOrderStatus(this.orderStatusString,this.userService.user.customerId)
            .subscribe(
                events=>{
                    this.orderCountStatus = events.countByStatus; // get number of orders by orderStatus
                    console.log(events.countByStatus);
                    this.setChartsData();
                },
                error=>console.log("Error: "+error)
            )
    }

    private setChartsData(){
        this.data = {
            labels: [
                'Completed'+this.orderCountStatus.completed+')',
                'Lost('+this.orderCountStatus.lost+')',
                'In process('+this.orderCountStatus.inProgress+')',
                'Booked('+this.orderCountStatus.booked+')',
                'Sold('+this.orderCountStatus.sold+')'
            ],
            datasets: [
                {
                    data: [
                        this.orderCountStatus.completed,
                        this.orderCountStatus.lost,
                        this.orderCountStatus.inProgress,
                        this.orderCountStatus.booked,
                        this.orderCountStatus.sold
                    ],
                    backgroundColor: [
                        "#07B6F1",
                        "#8A0808",
                        "#F1E907",
                        "#4DC93D",
                        "#232A22"
                    ],
                    hoverBackgroundColor: [
                        "#07B6F1",
                        "#8A0808",
                        "#F1E907",
                        "#4DC93D",
                        "#232A22"
                    ]
                }]
        };
    };

    ngOnInit(){
        this.options = {
            title: {
                display: true,
                text: 'My Title',
                fontSize: 16
            },
            legend: {
                position: 'left'
            },
            tooltips :{
                enabled:true
            }
        };
     this.setChartsData();
    }

    private initOrderByStatusString() {
        this.orderStatusString = {
            booked: '',
            completed: '',
            sold: '',
            inProgress: '',
            lost: ''
        }

    }
}