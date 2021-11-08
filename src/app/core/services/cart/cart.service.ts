import { Injectable } from '@angular/core';
import { Product } from 'src/app/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Product[] = [];
  item: Product;

  constructor() { }

  addItem(item: Product){
    console.log(this.cart);
    this.cart.push(item);
    console.log(this.cart);
  }
  getAllItems(){
    return this.cart;
  }
}
