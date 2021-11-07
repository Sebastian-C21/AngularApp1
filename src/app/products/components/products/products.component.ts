import { Component} from '@angular/core';
import { Product } from 'src/app/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.sass']
})
export class ProductsComponent {

  constructor(private productsService: ProductsService){}

  message2: string = 'Se vienen los productos'
  
  products: Product[] = this.productsService.getAllProducts();

  clickedProduct(id: number){
    console.log(id);
  };
  
}
