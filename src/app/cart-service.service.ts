import { Injectable } from '@angular/core';
import { Iproducts } from './Iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cart: Iproducts[] = [];
  fee: number = 0;
  total:number = 0;
  sumfee:number = 0;
  disc:number = 0;
  endtotal:number = 0;

  constructor() {
  }

  addToCart(obj: Iproducts){
    this.cart.push(obj);
  }

  getCart(){
    return this.cart;
  }

  calculateTotal(){
    for(let val of this.cart){
      this.total = this.total + val.price;
    }
    return this.total;
  }
  calculateFee(){
    for(let val of this.cart){
      this.fee = this.total * 0.1
    }
    return this.fee;

  }
  calculateTotalSum(){
   
    // this.sumfee = this.total + this.fee;

    return this.total + this.fee;
  }
  calculateDiscount(){
    this.disc = (this.total+this.fee)*0.15;

    return this.disc;
  }
  calculateEndTotal(){
    this.endtotal = this.total+this.fee-this.disc;

    return this.endtotal;
  }

  
}
