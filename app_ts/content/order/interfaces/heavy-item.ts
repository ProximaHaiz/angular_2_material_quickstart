import {HeavyItemType} from '../enums/heavy-item.enum'
import {CompanyType} from '../enums/all-enums'
export interface HeavyItem {
  type:HeavyItemType,
  name:string
}

export interface Companies {
  type:CompanyType;
  name:string;
}