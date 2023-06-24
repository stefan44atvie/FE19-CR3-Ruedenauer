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

  constructor(private cartService: CartServiceService){}

  ngOnInit(): void{
    this.cart = this.cartService.getCart();
    this.total = this.cartService.calculateTotal();
    this.fees = this.cartService.calculateFee();
    this.totalsum = this.total + this.fees;
  }

}
