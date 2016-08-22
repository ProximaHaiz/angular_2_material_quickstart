export class Vehicle {
    constructor(public id:number,
                public type:String,
                public vehicleRegNumber:String,
                public isAvaliable:boolean,
                public bookingDate:any,
                public periodOfDay:String) {
    }
}

export class Employe {
    constructor(public type:string,
                public firstName:string,
                private lastName:string,
                private position:string,
                private phone:string,
                private password:string,
                private rate:number,
                private workTime:number,
                private fine:number,
                private expenses:number,
                private salary:number,
                private bonuses:number,
                private enabled:boolean) {
    };
}
