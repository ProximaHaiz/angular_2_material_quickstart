import { HTTP_PROVIDERS, Http } from '@angular/http';
import {Injector} from '@angular/core';
import {Control} from '@angular/common';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

// import { ValidatorFn, AsyncValidatorFn } from '@angular/common/src/forms/directives/validators';

export class RepeatPasswordValidator{
    
    
    static checkRepeatPassword(control:Control, source:string):{[s:string]:boolean}{
        
        if(control.value!=source){
            return {'invalid confirm password':true};
        }
    }
    
    
}

