import {Component, OnInit} from '@angular/core';
import { ROUTER_DIRECTIVES, Router, ActivatedRoute} from '@angular/router';


@Component({
    templateUrl:'app_ts/content/single_element/single-product.html',
    styleUrls:['src/css/singleContentElement.css'],
    directives: [ROUTER_DIRECTIVES]
})

export class SingleContentComponent {

     errorMessage: string;
     private sub: any;
     constructor(
        private _router: Router,
        private route: ActivatedRoute){
    }
    
    onBack(){
        this._router.navigate(['/content']);
    }

 
    

    //  ngOnInit(){
    //      console.log('singleContentElement ngOnInit')
    //         this.sub = this.route.params.subscribe(params =>{
    //             let id = +params['id'];
    //             console.log("id="+id)
    //             this.getContent(id);
    //         })
    //  } 
}