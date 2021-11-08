import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  
  constructor(
    private cartService: CartService
  ) { }
  cart: Product[] = this.cartService.getAllItems();

  ngOnInit(): void {
  }

  

}
