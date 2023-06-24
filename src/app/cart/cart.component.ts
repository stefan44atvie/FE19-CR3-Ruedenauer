import { Component } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart: Iproducts[] = [];
  total: number = 0;
  fees: number = 0;
  totalsum: number = 0;
  totalwsum:number = 0;
  discount: number = 0;
  endtotal: number = 0;

  constructor(private cartService: CartServiceService){}

  ngOnInit(): void{
    this.cart = this.cartService.getCart();
    this.total = this.cartService.calculateTotal();
    this.fees = this.cartService.calculateFee();
    this.discount = this.cartService.calculateDiscount();
    this.totalsum = this.cartService.calculateTotalSum();
    this.endtotal = this.cartService.calculateEndTotal();
  }

}
