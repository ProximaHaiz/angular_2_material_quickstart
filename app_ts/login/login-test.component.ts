import {Component, Input,Output, EventEmitter} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import{DataHandlerService} from '../service/data-handler.service'

@Component({
    selector:'test',
    template:`
    <div class="text-center col-md-4">
    <h1>{{item}}</h1>
    <input type="text" class="form-control ">
    <button (click)="updateValue()">Update Value</button>
    </div>
    `,
    // inputs:['testValue']
})

export class TestComponent{
    item: string;
    subscription:Subscription;
  constructor(private _navService:DataHandlerService) {}
  ngOnInit() {
    console.log('TestComponent - Init')
    this.subscription = this._navService.navItem$.subscribe(
      item => this.item = item);
      
  }
  ngOnDestroy() {
    // prevent memory leak when component is destroyed
    console.log('TestComponent - Destroy')
    this.subscription.unsubscribe();
  }
    
}