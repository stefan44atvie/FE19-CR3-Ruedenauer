import { Injectable } from '@angular/core';
import { Iproducts } from './Iproducts';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cart: Iproducts[] = [];
  fee: number = 0;
  total:number = 0;

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
    // fee = total*0.1;
    return this.total;
  }
  calculateFee(){
    for(let val of this.cart){
      this.fee = this.total * 0.1
    }
    return this.fee;

  }

  
}
