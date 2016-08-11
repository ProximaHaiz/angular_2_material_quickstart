import { Employee } from './interfaces/foreman';
import { Vehicle } from './interfaces/vehicle';;
export class ManagerDTO{
    orderNumber:number;
    id:number;
    fullName:string;
    phoneNumber:string;
    mail:string;
    sizeOfMove:string; //enums
    storageSize:string;
    isLabor:boolean;

    truck:number; //enums
    movers:string; //enums
    orderDay:number;
    heavyItem:string; //enums
    fieldForManagerComments:string;
    loadingAddress:string;
    unloadingAddress:string;
    zipFrom:number;
    zipTo:number;

    foremans:Employee[];
    drivers:Employee[];
    moverss:Employee[];
    helpers:Employee[];
    vehicles:Vehicle[];

}