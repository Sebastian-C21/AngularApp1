import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ProductsComponent } from "./components/products/products.component";
import { ProductsRoutingModule } from "./products-routing.module";
import { ProductComponent } from "./components/product/product.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";

@NgModule({
    declarations: [
        ProductsComponent,
        ProductComponent,
        ProductDetailComponent
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        SharedModule
    ]
})

export class ProductsModule {

}