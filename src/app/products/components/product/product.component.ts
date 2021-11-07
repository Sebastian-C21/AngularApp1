import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.sass']
})
export class ProductComponent {
//Por meido del imput se reciben datos de otro componente, este se llama
//Property binding, que es comunicación con el componente padre
/*Se usa también el event binding con el decorador Output, en este
caso se usa para enviar información al componente padre, esta 
información debe ser recibida por el componente padre con propiedades
de emiter que al parecer es el parámetro (información) enviada*/
  added: boolean = false;
  
  @Input() product: Product;
  @Output() productClicked: EventEmitter<any> = new EventEmitter;

  addToCart(){
    this.productClicked.emit(this.product.id);
    this.added = true;
  }
}
