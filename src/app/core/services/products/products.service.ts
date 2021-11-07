import { Injectable } from '@angular/core';
import { Product } from 'src/app/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  product: Product;
  products: Product[] = [
    {
      id: '1',
      name: 'sword',
      text: 'perro',
      price: 1,
      image: 'assets/images/Profile.jpg'
    },
    {
      id: '2',
      name: 'sword',
      text: 'gato',
      price: 2,
      image: 'assets/images/Profile.jpg'
    },
    {
      id: '3',
      name: 'sword',
      text: 'perro',
      price: 3,
      image: 'assets/images/Profile.jpg'
    },
    {
      id: '4',
      name: 'sword',
      text: 'gato',
      price: 4,
      image: 'assets/images/Profile.jpg'
    }
  ];
  constructor() { }

  getAllProducts(){
    return this.products;
  }

  getProduct(id: string){

    /*
    console.log(id, typeof id)
    console.log(typeof this.products)
    console.log(typeof this.products[0])
    */
    let product = this.products.find(item => id === item.id); 
    /*
    console.log(product, typeof product)
    console.log(product?.id, typeof product?.id)
    

    let id1: string = product?.id!;
    let name1: string = product?.name!;
    let text1: string = product?.text!;
    let price1: number = product?.price!;
    let image1: string = product?.image!;
    */
   
    this.product = {
      id: product?.id!,
      name: product?.name!,
      text: product?.text!,
      price: product?.price!,
      image: product?.image!
    }
    return this.product;
  }
}
