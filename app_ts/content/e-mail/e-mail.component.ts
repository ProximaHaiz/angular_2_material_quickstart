import {Component, Pipe, Input} from "@angular/core";

import {
  Schedule, Button, InputText, Calendar, Dialog, Checkbox, TabPanel, TabView,
  CodeHighlighter, DataTable, Column
} from "primeng/primeng";
import {CORE_DIRECTIVES} from "@angular/common";
import {TableSortable} from "./tableSortable";
import {EMailRecieverService} from "./emailReciever.service";

declare var jQuery:any;

class EMail{
  constructor(
    public orderId:string,
    public firstName:string,
    public lastName: string,
    public email:string,
    public orderDesc: string,
    public orderDate: string
  ){}
}

class _EMail{
  constructor(
    public Id: string,
    public Name: string,
    public EMail: string,
    public Description: string,
    public Date: any
  ){}
}


@Component({
  selector: 'e-mail-component',
  templateUrl: 'app_ts/content/e-mail/e-mail.component.html',
  directives: [ CORE_DIRECTIVES, TableSortable],
  providers: [EMailRecieverService]
})


export class EMailComponent {
  displayDialog:boolean;

  email:EMail =  new EMail('','','','','','');

  selectedEMail:EMail;

  public modalMail:EMail = new EMail('','','','','','');

  emails:EMail[];


  public filters:any = [];

  constructor(private emailReviever: EMailRecieverService) {}

  ngOnInit() {

    this.emails = [
      new EMail('#10001', 'Mike', 'Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', '2016-08-12'),
      new EMail('#10002', 'Mike', 'Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', '2016-08-13'),
      new EMail('#10003', 'Mike', 'Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', '2016-08-02'),
      new EMail('#10004', 'Mike', 'Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', '2016-07-12'),
      new EMail('#10005', 'Mike', 'Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', '2016-02-16'),
      new EMail('#10006', 'Mike', 'Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', '2016-08-09'),
      new EMail('#10007', 'Mike', 'Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', '2016-04-12'),
      new EMail('#10008', 'Mike', 'Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', '2016-03-18'),
      new EMail('#10009', 'Mike', 'Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', '2016-08-04'),
      new EMail('#10010', 'Mike', 'Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', '2016-08-09'),
      new EMail('#10011', 'Mike', 'Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', '2016-08-11'),
      new EMail('#10012', 'Mike', 'Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', '2016-03-19')
    ];

    this.emailReviever.getEMails().subscribe(
      data => { 
        console.log(data);
      },
      err => console.error(err),
      () => console.log('done')
    );
    
  }



  public showModal(mail:EMail):void {
  this.modalMail = mail;
    jQuery('#myModal').modal('toggle');
  }

  //public fac: EMailFactory = new EMailFactory(0);

 /* public rows: EMail[] = [
    this.fac.getMail( 'Mike Delay','mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', 2016-08-12),
    this.fac.getMail( 'John Leyner','mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', 2016-03-02),
    this.fac.getMail( 'Vind Gerrard','mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', 2016-07-16),
  ];
  */

  public rows: _EMail[] = [
    new _EMail('#10001', 'Mike Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', 1471562032000),
    new _EMail('#10002', 'Jhon Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', 1432387616000),
    new _EMail('#10003', 'Bred Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', 1461820116000),
    new _EMail('#10004', 'Mike Wistwood', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', 1423128616000),
    new _EMail('#10005', 'Arnould Barins', 'arnould@gmail.com', 'Hi everyone RoyalMovingCo.com', 1439220116000),
    new _EMail('#10001', 'Mike Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', 1433588216000),
    new _EMail('#10002', 'Jhon Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', 1432387616000),
    new _EMail('#10003', 'Bred Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', 1461820116000),
    new _EMail('#10004', 'Mike Wistwood', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', 1423128616000),
    new _EMail('#10005', 'Arnould Barins', 'arnould@gmail.com', 'Hi everyone RoyalMovingCo.com', 1439220116000),
    new _EMail('#10001', 'Mike Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', 1433588216000),
    new _EMail('#10002', 'Jhon Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', 1432387616000),
    new _EMail('#10003', 'Bred Delay', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', 1461820116000),
    new _EMail('#10004', 'Mike Wistwood', 'mdaleyco@gmail.com', 'Quote Form Submitted on RoyalMovingCo.com', 1423128616000),
    new _EMail('#10005', 'Arnould Barins', 'arnould@gmail.com', 'Hi everyone RoyalMovingCo.com', 1439220116000),

  ];

  columns: any[] = [
    {
      display:  'ID',
      variable: 'Id',
      filter: 'Identifier',
      iconClass: 'glyphicon glyphicon-list-alt'
    },
    {
      display: 'Fullname', //The text to display
      variable: 'Name', //The name of the key that's apart of the data array
      filter: 'text' ,//The type data type of the column (number, text, date, etc.)
      iconClass: 'glyphicon glyphicon-user'
    },
    {
      display: 'Mail', //The text to display
      variable: 'EMail', //The name of the key that's apart of the data array
      filter: 'Email', //The type data type of the column (number, text, date, etc.)
      iconClass: 'glyphicon glyphicon-envelope'
    },
    {
      display: 'Description',
      variable: 'Description',
      filter: 'Description',
      iconClass: 'glyphicon glyphicon-book'
    },
    {
      display: 'Date', //The text to display
      variable: 'Date', //The name of the key that's apart of the data array
      filter: 'dateTime', //The type data type of the column (number, text, date, etc.)
      iconClass: 'glyphicon glyphicon-calendar'
    }
  ];
  sorting: any = {
    column: 'Date', //to match the variable of one of the columns
    descending: true
  };
}
