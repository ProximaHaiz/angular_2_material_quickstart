import {Component, OnInit, ChangeDetectorRef, Input} from '@angular/core';
import {HTTP_PROVIDERS}    from '@angular/http';
import {
  Schedule, Button, InputText, Calendar, Dialog, Checkbox, TabPanel, TabView,
  CodeHighlighter,SelectButton, SelectItem
} from "primeng/primeng";
import {EventService} from '../service/calendar.service';
import { Event} from '../content/order/event';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';
import { OrderCountStatus } from '../content/order/interfaces/order-count-status';
import { OrderStatusString } from './utils/order-status-string';
// import { OrderCountStatus } from ''


@Component({
  templateUrl: 'app_ts/schedule/schedule.html',
  styleUrls:['src/css/fullcalendar.css'],
  directives: [Schedule, Button, InputText, Calendar,
  Dialog, Checkbox, TabPanel, TabView, Button, CodeHighlighter, SelectButton,ROUTER_DIRECTIVES],
  providers: [HTTP_PROVIDERS, EventService],

  styles: [`
        .ui-grid-row div {
          padding: 4px 10px
        }
        
        .ui-grid-row div label {
          font-weight: bold;
        }
  `]
})

export class ScheduleDemo implements OnInit {
   private COMPLETED:string ='Completed';
   private BOOKED:string = 'Booked';
   private IN_PROGRESS = 'In progress';
   private SOLD = 'Sold';
   private types: SelectItem[];
   private selectedType: string;
   private selectedTypes: string[] = ['Completed','Booked','In progress','Sold'];
   private orderStatusString:OrderStatusString;
   selected(){
     console.log('select-component')
   }


  private events:Event[];
  header:any;
  moment:any;
  event:MyEvent;
  eve:any [];
  dialogVisible:boolean = false;
  idGen:number = 100;
  private errorMessage:string;
  private currentDate:string;
  private orderCountStatus:OrderCountStatus;

 
  constructor(private _eventService:EventService,
              private cd:ChangeDetectorRef,
              private _router: Router,
              private route: ActivatedRoute) {
      
      this.orderCountStatus = new OrderCountStatus();
      this.updateCountByStatus();
      
  }

  onChange(){
    this.initOrderByStatusString();
    this.selectedTypes.forEach(element => {
      console.log('item:'+element);
      switch(element){
        case this.COMPLETED:
        this.orderStatusString.completed = element;
        break;

        case this.BOOKED:
        this.orderStatusString.booked = element;
        break;

        case this.IN_PROGRESS:
        this.orderStatusString.inProgress = element;
        break;

        case this.SOLD:
        this.orderStatusString.sold = element;
        break;
      }
      console.log('item:'+JSON.stringify(this.orderStatusString));
    });
    console.log('-----------------');

    this.getEventsByOrderStatus();

  }

    getEventsByOrderStatus() {
    this._eventService.getEventsByOrderStatus(this.orderStatusString)
      .subscribe(
        events=>{
           this.currentDate = events.currentDate;
          this.events = events.calendarEntity; //get all events
          this.orderCountStatus = events.countByStatus; // get number of orders by orderStatus
          this.updateCountByStatus(); // update current number of orderStatus
          console.log('CountByStatus:'+this.orderCountStatus.booked); 
         },
        error=>this.errorMessage = <any>error
      )
  }


  getEvents() {
    this._eventService.getEvents()
      .subscribe(
        events=>{
        //    this.currentDate = events.currentDate;
        // console.log('currentDate:'+this.currentDate)
          this.events = events.calendarEntity; //get all events
          this.orderCountStatus = events.countByStatus; // get number of orders by orderStatus
          this.updateCountByStatus(); // update current number of orderStatus
          console.log('CountByStatus:'+this.orderCountStatus.booked);
          
         },
        error=>this.errorMessage = <any>error
      )
  }

  private updateCountByStatus(){
    this.types=[];
       this.types.push({label: 'Completed('+this.orderCountStatus.completed+')', value: this.COMPLETED});
        this.types.push({label: 'Booked('+this.orderCountStatus.booked+')', value: this.BOOKED});
        this.types.push({label: 'In Progress('+this.orderCountStatus.inProgress+')', value: this.IN_PROGRESS});
        this.types.push({label: 'Sold('+this.orderCountStatus.sold+')', value: this.SOLD});

  }

  getCurrentDate(){
       this._eventService.CurrentDate()
      .subscribe(
        events=>{
           this.currentDate = events.currentDate;
          console.log('currentDate:'+this.currentDate)
         },
        error=>this.errorMessage = <any>error
      )
  }

private initOrderByStatusString(){
  this.orderStatusString={
    booked:'',
    completed:'',
    sold:'',
    inProgress:''
  }
}
  ngOnInit() {
    this.initOrderByStatusString();
    // this.getCurrentDate();
    this.getEvents();
    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };
  }

  handleDayClick(event:any) {
    console.log('handleDayClick');
    this.event = new MyEvent();
    this.event.start = event.date.format();
    this.dialogVisible = true;

    //trigger detection manually as somehow only moving the mouse quickly after click triggers the automatic detection
    this.cd.detectChanges();
  }

  handleEventClick(e:any) {
    console.log('handleEventClick');
    this.event = new MyEvent();
    this.event.title = e.calEvent.title;

    let start = e.calEvent.start;
    let end = e.calEvent.end;
    if (e.view.name === 'month') {
      start.stripTime();
    }

    if (end) {
      end.stripTime();
      this.event.end = end.format();
    }

    this.event.id = e.calEvent.id;
    this.event.start = start.format();
    this.event.allDay = e.calEvent.allDay;
    // this.dialogVisible = true;
    console.log('url:'+ e.calEvent.url);
      console.log('id:'+ e.calEvent.orderId);
     this._router.navigate(['/content/manager', e.calEvent.orderId]);
  }

  saveEvent() {
    //update
    if (this.event.id) {
      let index:number = this.findEventIndexById(this.event.id);
      if (index >= 0) {
        // this.events[index] = this.event;
      }
    }
    //new
    else {
      this.event.id = this.idGen;
      // this.events.push(this.event);
      this.event = null;
    }

    this.displayEvents();

    this.dialogVisible = false;
  }

  private displayEvents() {
    this.events.forEach(element => {
      console.log('event:' + element.title + ', start:' + element);
    });
  }

  deleteEvent() {
    let index:number = this.findEventIndexById(this.event.id);
    if (index >= 0) {
      this.events.splice(index, 1);
    }
    this.dialogVisible = false;
  }

  findEventIndexById(id:number) {
    // console.log('findEventIndexById' + id);
    let index = -1;
    // for (let i = 0; i < this.events.length; i++) {
    //   if (id == this.events[i].id) {
    //     index = i;
    //     break;
    //   }
    // }

    return index;
  }
}

export class MyEvent {
  id:number;
  title:string;
  start:string;
  end:string;
  allDay:boolean = true;
}




