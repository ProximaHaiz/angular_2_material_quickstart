// address.component.ts

import { Component, Input } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup } from '@angular/forms';

@Component({
    // moduleId: module.id,
    selector: 'address',
    templateUrl: 'app_ts/content/order/address/address.component.html',
    directives: [REACTIVE_FORM_DIRECTIVES]
})
export class AddressComponent {
    // we will pass in address from App component
    @Input('group')
    public adressForm: FormGroup;
}