import { Address } from './address/address';
export class OrderForm{
     company:string;  //enums
     fullName:string;
     mail:string;
     phoneNumber:string;
     advertisement:string;
     sizeOfMove:string;
     storageSize:string;
    
     moveDate:string;
    
    packingDate:string;
  
    
    estimateDate:string;
  
    storageDate:string;
   
    moveDateTime:string;
    // @DateTimeFormat(pattern="HH:mm")
    packingDateTime:string;
    // @DateTimeFormat(pattern="HH:mm")
    estimateDateTime:string;

    isLabor:boolean;
    zipFrom:number;
    zipTo:number;
    unloadingAddress:Address [];
    loadingAddress: Address [];
    distance: string;
    // loadingAddress:string;
    // unLoadingAddress:string;
    tariff:string;
}