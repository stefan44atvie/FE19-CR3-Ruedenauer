import { Component, OnInit } from '@angular/core';
import { Iproducts } from '../Iproducts';
import { ActivatedRoute, Params } from '@angular/router';
import { products } from '../products';
import { CartServiceService } from '../cart-service.service';

@Component({
  selector: 'app-dish-details',
  templateUrl: './dish-details.component.html',
  styleUrls: ['./dish-details.component.scss']
})
export class DishDetailsComponent implements OnInit{
  product: Iproducts = {} as Iproducts;
  index: number = 0;

  constructor(private route: ActivatedRoute, private cartService: CartServiceService){

  }
  addToCart(){
    alert("Added to menu");
    this.cartService.addToCart(this.product);
    // this.cartService.addCount();
  }
    ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
        this.index = +params ['indexFromRouting'];
        this.product = products[this.index];
        console.log(this.product);
  
      });
    }
  }

