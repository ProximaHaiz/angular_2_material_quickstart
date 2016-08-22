import {Component} from "@angular/core";
import {TableOrderListComponent} from "./tableOrderList.component";

export class Order{
    constructor(
        public Id:string,
        public Name: string,
        public Status:string,
        public Date: any
    ){};
}

@Component({
    selector: 'order-list',
    templateUrl: 'app_ts/content/orderList/orderList.component.html',
    directives: [TableOrderListComponent]
})


export class OrderListComponent{

    public columns: any[] = [
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
            display: 'Status', //The text to display
            variable: 'Status', //The name of the key that's apart of the data array
            filter: 'Status', //The type data type of the column (number, text, date, etc.)
            iconClass: 'glyphicon glyphicon-envelope'
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

    public rows: Order[] = [
        new Order('#10001', 'Mike Delay', 'Completed', 1471562032000),
        new Order('#10002', 'Jhon Delay', 'Sold', 1432387616000),
        new Order('#10003', 'Bred Delay', 'In progress',  1461820116000),
        new Order('#10004', 'Mike Wistwood', 'Sold', 1423128616000),
        new Order('#10005', 'Arnould Barins', 'Completed', 1439220116000),
        new Order('#10006', 'Mike Delay', 'Booked',  1433588216000),
        new Order('#10007', 'Jhon Delay', 'Booked',  1432387616000),
        new Order('#10008', 'Bred Delay', 'Completed',  1461820116000),
        new Order('#10009', 'Mike Wistwood', 'In progress', 1423128616000),
        new Order('#10010', 'Arnould Barins', 'Completed', 1439220116000),
        new Order('#10011', 'Mike Delay', 'In progress',  1433588216000),
        new Order('#10012', 'Bred Delay', 'Sold', 1461820116000),
        new Order('#10013', 'Mike Wistwood', 'Booked', 1423128616000),
        new Order('#10014', 'Arnould Barins', 'In progress', 1439220116000)
    ];

}

