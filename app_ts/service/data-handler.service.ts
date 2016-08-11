import {Injectable}      from '@angular/core'
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataHandlerService {
  // Observable navItem source
  private _navItemSource = new BehaviorSubject<string>('');
  // Observable navItem stream
  navItem$ = this._navItemSource.asObservable();
  // service command
  changeNav(number:any) {
    console.log('value changed: '+number)
    this._navItemSource.next(number);
    return number;
  }
}