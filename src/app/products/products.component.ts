import { Component} from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent {
  message2: string = 'Se vienen los productos'
  products: Product[] = [
    {
      id: '1',
      name: 'sword',
      text: 'perro',
      price: 1,
      image: 'assets/images/cat1.jpg'
    },
    {
      id: '2',
      name: 'sword',
      text: 'gato',
      price: 2,
      image: 'assets/images/cat2.jpg'
    },
    {
      id: '3',
      name: 'sword',
      text: 'perro',
      price: 3,
      image: 'assets/images/cat3.jpg'
    },
    {
      id: '4',
      name: 'sword',
      text: 'gato',
      price: 4,
      image: 'assets/images/cat4.jpg'
    }
  ];

  clickedProduct(id: number){
    console.log(id);
  };
  
}
