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
      name: 'Blue Whale Bed',
      text: 'Confortable bed for your cat!',
      price: 2,
      image: 'assets/images/pro1.jpg'
    },
    {
      id: '2',
      name: 'Green Pillow Bed',
      text: 'Confortable bed for your cat!',
      price: 2,
      image: 'assets/images/pro2.jfif'
    },
    {
      id: '3',
      name: 'Cat Treehouse',
      text: 'Confortable house for your cat!',
      price: 3,
      image: 'assets/images/pro3.png'
    },
    {
      id: '4',
      name: 'Fancy Cat House',
      text: 'Confortable house for your cat!',
      price: 4,
      image: 'assets/images/pro4.jpg'
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
