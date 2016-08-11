import{Component,OnInit} from '@angular/core';
import {CategoryServiceComponent} from '../../service/category.service';
import { ROUTER_DIRECTIVES} from '@angular/router';

@Component({
    selector:'categories',
    templateUrl:'app_ts/content/categories/categories.html',
    styleUrls:['src/css/left-navbar.css'],
    directives:[ROUTER_DIRECTIVES],

})

export class Categories implements OnInit{
   private categories: Categories[];
   private errorMessage: string;

    constructor(private _contactService:CategoryServiceComponent){}
  
      getCategories(){
            this._contactService.getAllCategories()
                .subscribe(
                    categories => this.categories = categories,
                    error => this.errorMessage = <any>error)
    }
    
       ngOnInit() {
           console.log('categories init')
        //  this.getCategories();
       }
}
