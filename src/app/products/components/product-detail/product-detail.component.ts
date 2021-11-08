import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/app/product.model';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.sass']
})
export class ProductDetailComponent implements OnInit {
  product: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.product = this.productsService.getProduct(id);
    });
  }
  addToCart(){
    this.cartService.addItem(this.product);
  }

}
/*Toca subscribirse al cambio que exista entre los
  parámetros (params) */
  /*Luego de esto me tengo que comunicar con el servicio de
    datos y pasarle la información del objeto*/

/*Con el objeto route y su metodo params seguido del
      subscrite, se logra leer el atributo que se le asigna
      a products/:id, se logra leer ese id luego del slash 
      para posteriormente, usar las funciones creadas en el
      servicio que lo que hacen es buscar en sus pequeña 
      base de datos el atributo id en todo el arreglo que 
      es de tipo json, una vez el id leído de la url, y pasado
      a la función del servicio, este busca un match y si lo
      encuentra entonces devuelve todos los atributos de ese
      objeto */
      /*En este punto ya se tiene el objeto, pero este no llega
      hasta el template, se tendrá que generar un tipo de dato
      que pueda ser renderizado en el template (tipo product en
      este caso)*/