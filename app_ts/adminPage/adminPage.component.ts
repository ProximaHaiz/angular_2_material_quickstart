import {Component} from "@angular/core";
import {MoversType, TruckType} from "../content/order/enums/all-enums";
import {OrderService} from "../service/order.service";
import {Http, Headers, RequestOptions} from "@angular/http";
import {API_URL} from "../service/urls";
import {AdminPostService} from "./adminPage.service";
import {Vehicle, Employe} from "./adminPage.models";

@Component({
    selector: 'admin-page-component',
    templateUrl: 'app_ts/adminPage/adminPage.component.html',
    providers: [AdminPostService]
})

export class AdminPageComponent{

    public movers: any;
    public trucks: any;
    
    public employees: string[] = [
        'Foreman',
        'Driver',
        'Mover'
    ];

    constructor(private postService: AdminPostService){};
    

    public addVehicle(
        id: number,
        type: String,
        vehicleRegNumber: String,
        isAvaliable: boolean,
        bookingDate: any,
        periodOfDay: String
    ){
        let newVehicle: Vehicle = new Vehicle(id,type,vehicleRegNumber, isAvaliable, bookingDate, periodOfDay);
        this.postService.postData(JSON.stringify(newVehicle));
    }
    
    public addEmploye(
        selectedEmploye:number,
        firstName: string,
        lastName: string,
        position: string,
        phone:string,
        password:string,
        rate:number,
        workTime:number,
        fine:number,
        expenses:number,
        salary:number,
        bonuses:number,
        enabled: boolean
    ){
        let object:Employe = new Employe(
            this.employees[selectedEmploye],
            firstName,
            lastName,
            position,
            phone,
            password,
            rate,
            workTime,
            fine,
            expenses,
            salary,
            bonuses,
            enabled
        );
        this.postService.postData( JSON.stringify(object) );
    };
}
