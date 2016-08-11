// import { Injectable } from '@angular/core';
// import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import {ContactComponent} from '../login/contact';
// import {Categories} from '../content/categories/categories.component';
// import { API_URL } from './urls';
// import { AbstractService } from './abstract.service'

// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';


// export interface myData {
//    name:string;
// }

// @Injectable()
// export class ProductServiceComponent extends AbstractService{
//     constructor(private _http: Http){super()}
    
//     //  getProducts() {
//     //     return this._http.get(API_URL+"products")
//     //         .map(res => <IContent[]> res.json())
//     //         .do(data => console.log(data))
//     //         .catch(this._handleError);
//     // }
    
//     // getProduct(id:number){
//     //         let params = new URLSearchParams();
//     //         params.set('productId',id+'');
//     //         return this._http.get(API_URL+"product",{search:params})
//     //             .map(res => <IContent> res.json())
//     //             .do(data => console.log('Data: ' + JSON.stringify(data)))
//     //             .catch(this._handleError);
//     // }
        
//     getProductBySearch(searchQuery:string){
//             let params = new URLSearchParams();
//             params.set('searchQuery',searchQuery);
//             return this._http.get(API_URL+'productBySearch',{search:params})
//                 .map(res => res.json())
//                 .do(data => console.log('Data: ' + JSON.stringify(data)))
//                 .catch(this._handleError);  
//   }

//      getProductByCategory(category:string){
//              let params = new URLSearchParams();
//              params.set('category',category);
//              return this._http.get(API_URL+"productsByCategory",{search: params})
//                 .map(res => res.json())
//                 .do(data => console.log('Products by category: ' + JSON.stringify(data)))
//                 .catch(this._handleError);
//   }


//   createNewProduct(product: IContent){
//             const loginUrl = API_URL+'createProduct';
//             let headers = new Headers({ 'Content-Type': 'application/json' });
//             let options = new RequestOptions({ headers: headers });
//             console.log('Product created:'+ product);
//             return this._http.post(loginUrl,JSON.stringify(product),options)
//             .map(res => res.json())
//             .catch(this._handleError);
//   }

 
  
//      private  transformBySearchString(value: any, filter: string): IContent[] {
//          let data = <IContent[]> value.json();
//         filter = filter ? filter.toLocaleLowerCase() : null;
//         return filter ? data.filter((content: IContent) =>
//             content.name.toLocaleLowerCase().search(filter) !== -1) : data;
//       }

//      private transformByCategory(value: any, filter: string): IContent[] {
//             let data = <IContent[]> value.json();
//             data.forEach(element => {
//                 element.description = '';
//             });
//             filter = filter ? filter.toLocaleLowerCase() : null;
//             return filter ? data.filter((content: IContent) =>
//                 content.category.toLocaleLowerCase().search(filter) !== -1) : data;
//       }
// }