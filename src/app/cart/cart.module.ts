import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CartComponent } from './components/cart/cart.component';

import { CartRoutingModule } from "./cart-routing.module";

import { MatButtonModule } from "@angular/material/button";
import { ProductsModule } from "../products/products.module";
import { ItemComponent } from "./components/item/item.component";
import { SharedModule } from "../shared/shared.module";


@NgModule({
    declarations: [
        CartComponent,
        ItemComponent
    ],
    imports: [
        CommonModule,
        CartRoutingModule,
        MatButtonModule,
        ProductsModule,
        SharedModule
    ]
})

export class CartModule {}