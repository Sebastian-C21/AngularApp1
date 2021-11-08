import { Component, OnInit, Input} from '@angular/core';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  @Input() cart:Product;
  
  constructor() { }

  ngOnInit(): void {
  }

}
