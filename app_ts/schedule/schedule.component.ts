import {Component, OnInit, ChangeDetectorRef, Input} from '@angular/core';
import {HTTP_PROVIDERS}    from '@angular/http';
import {
  Schedule, Button, InputText, Calendar, Dialog, Checkbox, TabPanel, TabView,
  CodeHighlighter
} from "primeng/primeng";
import {EventService} from '../service/calendar.service';
import { Event} from '../content/order/event';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';

@Component({
  templateUrl: 'app_ts/schedule/schedule.html',
  styleUrls:['src/css/fullcalendar.css'],
  directives: [Schedule, Button, InputText, Calendar,
    Dialog, Checkbox, TabPanel, TabView, Button, CodeHighlighter, ROUTER_DIRECTIVES],
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

  private events:Event[];
  header:any;
  moment:any;
  event:MyEvent;
  eve:any [];
  dialogVisible:boolean = false;
  idGen:number = 100;
  private errorMessage:string;
  private currentDate:string;

 
  constructor(private _eventService:EventService,
              private cd:ChangeDetectorRef,
              private _router: Router,
              private route: ActivatedRoute) {
  }


  getEvents() {
    this._eventService.getEvents()
      .subscribe(
        events=>{
        //    this.currentDate = events.currentDate;
        // console.log('currentDate:'+this.currentDate)
          this.events = events.calendarEntity;
         },
        error=>this.errorMessage = <any>error
      )
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

  ngOnInit() {
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


