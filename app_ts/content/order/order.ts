import { Address } from './address/address'
import { Client } from './client';
import { OrderForm } from './orderForm';
import {  PaymentDetailsForm } from './payment-details-form'
export class OrderModel{
    constructor(){
        this.orderForm = new OrderForm();
        this.paymentDetailsForm = new  PaymentDetailsForm();   
    }
    // client:Client;
    orderForm:OrderForm;
    paymentDetailsForm: PaymentDetailsForm;
}
