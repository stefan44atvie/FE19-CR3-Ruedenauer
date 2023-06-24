import { Component } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  products: Iproducts[] = products;

  constructor(private route: ActivatedRoute, private cartService: CartServiceService){
  }
  
  // addToCart(){
  //   alert("Added to menu");
  //   this.cartService.addToCart();
  //   // this.cartService.addCount();
  // }
}
