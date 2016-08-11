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



@Component({
    templateUrl: 'app_ts/content/dashboard/dashboard.html',
    directives: [Schedule, Button, InputText, Calendar,
                 Dialog, Checkbox, TabPanel, TabView,
                 Button, CodeHighlighter,SplitButton,
                 SplitButtonItem,MultiSelect,UIChart, ROUTER_DIRECTIVES,
                 REACTIVE_FORM_DIRECTIVES],
    providers: [HTTP_PROVIDERS,OrderService],
})

export class DashboardComponent  {
   
        data: any;
        options: any;
//booked - забронировано
    constructor() {
        this.data = {
            labels: ['Active','Lost','In process','Total','booked'],
            datasets: [
                {
                    data: [55, 11, 10,92,16],
                    backgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#0B2F3A",
                        "#8A0808"
                    ],
                    hoverBackgroundColor: [
                        "#FF6384",
                        "#36A2EB",
                        "#FFCE56",
                        "#0B2F3A",
                        "#8A0808"
                    ]
                }]    
            };

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
    }


}