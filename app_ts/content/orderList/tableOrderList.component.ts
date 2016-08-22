import {Component, Input} from "@angular/core";
import {Format} from "../e-mail/format";
import {OrderBy} from "../e-mail/orderBy";
import {Order} from "./orderList.component";

declare var jQuery:any;


@Component({
    selector: 'table-order-list',
    templateUrl: 'app_ts/content/orderList/tableOrderList.component.html',
    pipes: [OrderBy, Format]
})

export class TableOrderListComponent{

    public selectedOrder: Order;

    public statuses:string[];
    constructor(){
        this.selectedOrder = new Order(null, null, null, null);
        this.statuses = [
            'Completed',
            'In progress',
            'Booked',
            'Sold'
        ];
    }

    @Input() columns: any[];
    @Input() data: any[];
    @Input() sort: any;

    selectedClass(columnName:any): any{
        return columnName == this.sort.column ? 'sort-' + this.sort.descending : false;
    }

    changeSorting(columnName:any): void{
        var sort = this.sort;
        if (sort.column == columnName) {
            sort.descending = !sort.descending;
        } else {
            sort.column = columnName;
            sort.descending = false;
        }
    }

    convertSorting(): string{
        return this.sort.descending ? '-' + this.sort.column : this.sort.column;
    }

    public getTrClass(status: string):string{
        switch (status){
            case 'Completed': return 'success';
            case 'In progress': return 'info';
            case 'Booked': return 'warning';
            case 'Sold': return 'danger';
        }
    };

    public startModal( order: Order ){
        jQuery('#myModal').modal('show');
        this.selectedOrder = order;
    };
}

