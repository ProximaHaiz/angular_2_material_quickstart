import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute} from "@angular/router";
import {Calendar, SelectItem, MultiSelect} from "primeng/primeng";
import {
    TariffType, PaymentMethodType, TruckType, PackageMaterialType, ShrinkType,
    TapeType, MoversType, RatePerHourType
} from "../order/enums/all-enums";
import {TotalHourType} from "../order/enums/total-hour.enum";
import {StorageSizeType} from "../order/enums/storage-size.enum";
import {CounterService} from "./counterManage.service";


@Component({
    selector: 'counter-manage-component',
    templateUrl: 'app_ts/content/counter/counterManager.component.html',
    directives: [MultiSelect ,Calendar],
    providers: [CounterService]
})

export class CounterManagerComponent implements OnInit{

    private id: number;

    public tariffs:any;
    public paymentMethods: any;
    public trucks: any;
    public packageMaterials: any;
    public shrinks: any;
    public tapes: any;
    public heavyItems: SelectItem[];
    public totalHours: any;
    public movers: any;
    public ratePerHour: any;
    public storageSizes:any;

    private _order:any;
    
    /*public client: Object ={
        fullName: null,
        mail: null,
        phone: null
    };
    
    /*public order: Object= {
        paymentMethod: null,
        heavyItemPrice: null,
        trucks: null,
        movers: null,
        serviceCharge: null,
        packingMaterial: null,
        ddt: null,
        heavyItems: null,
        shrink: null,
        tape: null,
        tariff: null,
        totalPrice: null,
        priceForEachHour: null,
        ddtPrice: null,
        rateType: null
    };
    */
    public client: Client;
    public order: Order ;
    


    constructor(private route: ActivatedRoute, private counterService: CounterService){
       this.route.params.subscribe(params =>{
           let id = +params['id'];
           this.id = id;
           console.log("id="+id);
       });

       this.initTariff();
       this.initPaymentMethods();
       this.initTrucks();
       this.initPackageMaterials();
       this.initShrinks();
       this.initTapes();
       this.initTotalHours();
       this.initMovers();
       this.initRatePerHour();
       this.initStorageSize();
   };

    public ngOnInit(){
        
        this.counterService.getData(this.id).subscribe(
            (data)=>{
                this._order = data;
                console.log(this._order.client);
                this.parseData();
            },
            (error)=>console.log()
        );
    };

    private parseData(){
        this.client = {
            fullName: this._order.client.fullName,
            mail: this._order.client.mail,
            phone: this._order.client.phone
        };

        this.order = {
            paymentMethod: this._order.paymentMethod,
            heavyItemPrice: this._order.heavyItemPrice,
            trucks: this._order.truck,
            movers: this._order.movers,
            serviceCharge: this._order.serviceCharge,
            ddt: this._order.ddt,
            shrink: this._order.shrink,
            discount: this._order.discount,
            totalHours: this._order.totalHour,
            totalPrice: this._order.totalPrice,
            priceForEachHour: this._order.priceForEachHour,
            ddtPrice: this._order.ddtPrice
        };

        
    };

    public heavyItemPrice: number;
    public paymentDetails:any;

    public saveData(){
       /* this._order.client.fullName = this.client.fullName;
        this._order.client.mail = this.client.mail;
        this._order.client.phone = this.client.phone;

        this._order.paymentMethod = this.order.paymentMethod;
        this._order.truck = this.order.truck;
        this._order.movers = this.order.movers;
        this._order.serviceCharge = this.order.serviceCharg;
        this._order.ddt = this.order.ddt;
        this._order.shrink = this.order.shrink;
        this._order.discount = this.order.discount;
        this._order.totalHour = this.order.totalHour;
        this._order.totalPrice = this.order.totalPrice;
        this._order.priceForEachHour = this._order.priceForEachHour;
        this._order.ddtPrice = this.order.ddtPrice;

        console.log(JSON.stringify(this._order));
        */
    };
    private initTariff() {
        this.tariffs = [
            {
                type: TariffType.STANDARD,
                name: 'Standart'
            },
            {
                type: TariffType.ALL_INCLUSIVE,
                name: 'All inclusive'
            }]
    }
    
    private initPaymentMethods() {
        this.paymentMethods = [
            {
                type: PaymentMethodType.CASH,
                name: 'Cash'
            }, 
            {
                type: PaymentMethodType.CREDIT_CART,
                name: 'Credit card'
            },
            {
                type: PaymentMethodType.PAYPAL,
                name: 'Paypal'
            },
            {
                type: PaymentMethodType.CHEQUE,
                name: 'Cheque'
            }]
    }

    private initTrucks() {
        this.trucks = [
            {
                type: TruckType.ONE,
                name: 1
            },
            {
                type: TruckType.TWO,
                name: 2
            }, {
                type: TruckType.THREE,
                name: 3
            }, {
                type: TruckType.FOUR,
                name: 4
            }, {
                type: TruckType.FIVE,
                name: 5
            }]
    }

    private initPackageMaterials() {
        this.packageMaterials = [
            {
                type: PackageMaterialType.EXTRA,
                name: 'Extra'
            },
            {
                type: PackageMaterialType.FREE,
                name: 'Free'
            }]
    }

    private  initShrinks() {
        this.shrinks = [
            {
                type: ShrinkType.S1,
                name: 1
            },
            {
                type: ShrinkType.S2,
                name: 2
            }, {
                type: ShrinkType.S3,
                name: 3
            }, {
                type: ShrinkType.S4,
                name: 4
            }, {
                type: ShrinkType.S5,
                name: 5
            }]
    }

    private initTapes() {
        this.tapes = [
            {
                type: TapeType.T1,
                name: 1
            },
            {
                type: TapeType.T2,
                name: 2
            },
            {
                type: TapeType.T3,
                name: 3
            },
            {
                type: TapeType.T4,
                name: 4
            },
            {
                type: TapeType.T5,
                name: 5
            }];
    }

    private initTotalHours() {
        this.totalHours = [
            {
                type: TotalHourType.THREE,
                name: 3
            },
            {
                type: TotalHourType.TWO,
                name: 2
            },
            {
                type: TotalHourType.ONE,
                name: 1
            }]
    }

    private initMovers() {
        this.movers = [
            {
                type: MoversType.TWO,
                name: 2
            },
            {
                type: MoversType.THREE,
                name: 3
            },
            {
                type: MoversType.FOUR,
                name: 4
            },
            {
                type: MoversType.FIVE,
                name: 5
            },
            {
                type: MoversType.SIX,
                name: 6
            },
            {
                type: MoversType.SEVEN,
                name: 7
            },
            {
                type: MoversType.EIGHT,
                name: 8
            },
            {
                type: MoversType.NINE,
                name: 9
            },
            {
                type: MoversType.EIGHT,
                name: 10
            },]
    }

    private initRatePerHour() {
        this.ratePerHour = [
            {
                type: RatePerHourType.RATE_PER_HOUR,
                name: 'Rate per hour'
            }, {
                type: RatePerHourType.FLAT_RATE,
                name: 'Flat rate'
            }];
    }

    private  initStorageSize() {
        this.storageSizes = [
            {
                type: StorageSizeType.S5X10,
                name: '5x10'
            },
            {
                type: StorageSizeType.S10X10,
                name: '10x10'
            },
            {
                type: StorageSizeType.S10X20,
                name: '10x20'
            },
            {
                type: StorageSizeType.S20X20,
                name: '20x20'
            }]
    }
}

export class Client{
    fullName: any;
    mail: any;
    phone: any;
}

export class Order{
    paymentMethod: any;
    heavyItemPrice: any;
    trucks: any;
    movers: any;
    serviceCharge: any;
    ddt: any;
    shrink: any;
    discount: any;
    totalHours: any;
    totalPrice: any;
    priceForEachHour: any;
    ddtPrice: any;
}