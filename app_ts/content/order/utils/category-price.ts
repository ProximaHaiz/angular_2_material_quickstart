import {CompanyPrice} from '../interfaces/company-price'
import {OnInit} from '@angular/core'
export class PriceCategory {
     md_th_price:{[id:string]:CompanyPrice};
     fr_sd_price:{[id:string]:CompanyPrice};
     end_of_month_price:{[id:string]:CompanyPrice};
     allInclusiveprice:{[id:string]:CompanyPrice};
     constructor(){
        this.initPrices();
     }

    initPrices(){

        this.md_th_price={
        'Royal':{
            two: 89,three: 119,four: 149,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0},
        'Shark':{//+
            two: 85,three: 115,four: 145,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0
        },
         'Lions':{
            two: 85,three: 115,four: 145,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0
        },
        'Apple':{
            two: 85,three: 115,four: 145,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0      
         },
        'Muscle':{
            two: 85,three: 115,four: 145,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0
        },
         'Pacific':{//+
             two: 85,three: 115,four: 145,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0
        }
    }
    
    this.fr_sd_price = {
        'Royal':{
            two: 99,three: 135,four: 165,five: 0,six: 0,seven: 0,eight: 0,nine: 0,ten: 0},
        'Shark':{//+
            two: 95,three: 125,four: 155,five: 0,six: 0,seven: 0,eight: 0,nine: 0,ten: 0
        },
         'Lions':{
            two: 85,three: 115,four: 145,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0
        },
        'Apple':{
            two: 85,three: 115,four: 145,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0      
         },
        'Muscle':{
            two: 85,three: 115,four: 145,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0
        },
         'Pacific':{//+
             two: 95,three: 125,four: 155,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0
        }
    }
    
    this.end_of_month_price={
            'Royal':{
            two: 109,three: 145,four: 175,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0},
        'Shark':{
            two: 85,three: 115,four: 145,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0
        },
         'Lions':{
            two: 85,three: 115,four: 145,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0
        },
        'Apple':{
            two: 85,three: 115,four: 145,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0      
         },
        'Muscle':{
            two: 85,three: 115,four: 145,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0
        },
         'Pacific':{
             two: 85,three: 115,four: 145,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0
        }
    }

    this.allInclusiveprice={
        'Royal':{
            two: 109,three: 145,four: 175,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0},
        'Shark':{
            two: 85,three: 115,four: 145,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0
        },
         'Lions':{
            two: 100,three: 135,four: 145,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0
        },
        'Apple':{
            two: 85,three: 115,four: 145,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0      
         },
        'Muscle':{
            two: 85,three: 115,four: 145,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0
        },
         'Pacific':{
             two: 85,three: 115,four: 145,five: 165,six: 0,seven: 0,eight: 0,nine: 0,ten: 0
        }
    }

    }   
}