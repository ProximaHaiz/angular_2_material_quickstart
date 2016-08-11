import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES} from '@angular/router';
import {
     FormBuilder,
     Validators,
     FormControl,
     FormGroup, REACTIVE_FORM_DIRECTIVES 
} from '@angular/forms';
import{RegistrationContact} from './registration-contact'
import{UserServiceComponent} from '../service/user.service'
import {Http} from '@angular/http';
import{RepeatPasswordValidator} from '../shared/repeat-password-validator'

@Component({
    templateUrl:'app_ts/registration/registration.html',
styleUrls:['src/css/signin.css'],
directives: [ROUTER_DIRECTIVES, REACTIVE_FORM_DIRECTIVES]
    }
)
 export class RegistrationFormComponent implements OnInit{
        private registerForm: FormGroup;
        private pageTitle: string = '';
        private passwordControl :FormControl;
        
        private formError: { [id: string]: string };
        private _validationMessages: { [id: string]: { [id: string]: string } };
        private errorMessage: string;
        
        private registerContact: RegistrationContact;
        
        constructor(private _fb: FormBuilder,
                    private _contactService:UserServiceComponent){
            this.formError = {
            'email': '',
            'password': '',
            'repeat_password':''
        };
        this.pageTitle = 'hello Vova';
        this.registerContact = new RegistrationContact();
        
        this.registerForm = _fb.group({
            'email': new FormControl(this.registerContact.email,
                    Validators.compose([Validators.required, Validators.minLength(4)])),
            'password': new FormControl(this.registerContact.password,
                    Validators.compose([Validators.required, Validators.minLength(8)])),
             'repeat_password': new FormControl(this.registerContact.repeat_password,
                    Validators.compose([Validators.required]))},
                   {validator: matchingPasswords('password','repeat_password')});
                   

        this._validationMessages = {
            'email': {
                'required': 'email is required',
                'minlength': 'email must be at least four characters.',
                'maxlength': 'email cannot exceed 50 characters.'
            },
            'password': {
                'required': 'Password is required',
                'minlength': 'Password must be at least 8 characters.',
                'maxlength': 'Password cannot exceed 50 characters.'
            },
            'repeat_password': {
                'required': 'Password is required',
                'notequal': 'Confirm password not equal',
            }
        };
        
         this.registerForm.valueChanges
                .debounceTime(300)
                // .distinctUntilChanged()
                .subscribe(data => this.onValueChanged(data));
    }  
    /**
     * The following method checks for errors on the 'loginForm'. If error detected, it push to the 
     * formError binding with current 'field'
     */
    onValueChanged(data: any) {
        for (let field in this.formError) {
            if (this.formError.hasOwnProperty(field)) {
                let hasError = this.registerForm.controls[field].dirty &&
                    !this.registerForm.controls[field].valid;
                    console.log('from controls:'+this.registerForm.value.password)
                this.formError[field] = '';
                if (hasError) {
                 
                    for (let key in this.registerForm.controls[field].errors) {
                           if(field=='repeat_password'){
                    }
                        if (this.registerForm.controls[field].errors.hasOwnProperty(key)) {
                            this.formError[field] += this._validationMessages[field][key] + ' ';
                        }
                    }
                }
            }
        }

        if(this.registerForm.hasError('notequal')&&this.registerForm.controls['repeat_password'].value!==''){
            this.formError['repeat_password']=this._validationMessages['repeat_password']['notequal'];
        }
    }
    
    
    ngOnInit(): any{
        this.passwordControl = new FormControl(this.registerContact.password,
                    Validators.compose([Validators.required, Validators.minLength(8)]));
    }
    
    login(){
        console.log(this.registerForm.value);
        this._contactService.loginUser(this.registerForm.value)
        .subscribe(data =>{
            console.log('loginForm have been send');
        });
    } 
}

    function matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
  return (group: FormGroup): {[key: string]: any} => {
    let password = group.controls[passwordKey];
    let confirmPassword = group.controls[confirmPasswordKey];
    console.log('password:'+password.value+', repeat_password:'+confirmPassword.value)
    if (password.value !== confirmPassword.value) {
      return {
        'notequal': true
      };
    }
  }
} 
