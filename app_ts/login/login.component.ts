import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {
     FormBuilder,
     Validators,
     FormControl,
     FormGroup, REACTIVE_FORM_DIRECTIVES 
} from '@angular/forms';
import{ContactComponent} from './contact'
import{UserServiceComponent} from '../service/user.service';
import{DataHandlerService} from '../service/data-handler.service';
import {TestComponent} from './login-test.component';
import {Subject} from "rxjs/Subject";

import {InputText} from 'primeng/primeng';

@Component({
    templateUrl:'app_ts/login/login.html',
    styleUrls:['src/css/signin.css'],
    directives: [
        ROUTER_DIRECTIVES,
        TestComponent,
        REACTIVE_FORM_DIRECTIVES,
        InputText]
    }
)
 export class LoginFormComponent implements OnInit{
        public loginForm: FormGroup ;
        private pageTitle: string;
        private search:string;
        private errorMessage: string;
        private loginError: string="";
        private searchStream = new Subject<string>();
        private newContact: ContactComponent;

        private formError: { [id: string]: string };
        private _validationMessages: { [id: string]: { [id: string]: string } };

           ngOnInit(){
                console.log('Login OnInit');     
            }

        constructor(private _fb: FormBuilder,
                    private _contactService:UserServiceComponent,
                    private _dataHandlerService: DataHandlerService){
            console.log('Login constructor');  
             this.newContact = new ContactComponent();
            this.loginForm = this._fb.group({
            'username': new FormControl(this.newContact.username,Validators.compose([Validators.required, Validators.minLength(4)])),
            'password': new FormControl(this.newContact.password,
             Validators.compose([Validators.required, Validators.minLength(6)]))
        });
            this.formError = {
            'username': '',
            'password': ''
        };

        this._validationMessages = {
            'username': {
                'required': 'Username is required',
                'minlength': 'Username must be at least four characters.',
                'maxlength': 'Username cannot exceed 50 characters.'
            },
            'password': {
                'required': 'Password is required',
                'minlength': 'Password must be at least 6 characters.',
                'maxlength': 'Password cannot exceed 50 characters.'
            }
        };
        
         this.loginForm.valueChanges
                .debounceTime(200)
                .subscribe(data => this.onValueChanged(data));
    }  
    /**
     * The following method checks for errors on the 'loginForm'. If error detected, it push to the 
     * formError binding with current 'field'
     */
    onValueChanged(data: any) {
        if(this.loginError!==""){
            this.loginError="";
        }
        for (let field in this.formError) {
            if (this.formError.hasOwnProperty(field)) {
                let hasError = this.loginForm.controls[field].dirty &&
                    !this.loginForm.controls[field].valid;
                this.formError[field] = '';
                if (hasError) {
                    for (let key in this.loginForm.controls[field].errors) {
                        if (this.loginForm.controls[field].errors.hasOwnProperty(key)) {
                            this.formError[field] += this._validationMessages[field][key] + ' ';
                        }
                    }
                }
            }
        }
    }
    
    login(){
        console.log(this.loginForm.value);
        this._contactService.loginUser(this.loginForm.value)
        .subscribe(data =>{
            console.log('loginForm have been send');
            this.loginError = "";
        },
        error =>{
            this.loginError = error;
            console.log('login error: '+error)
        });
    }   
}
