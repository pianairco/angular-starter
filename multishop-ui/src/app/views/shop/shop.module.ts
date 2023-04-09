import {NgModule} from '@angular/core';

import {ShopRoutingModule} from './shop-routing.module';
import {ShopComponent} from './shop.component';
import {ProductsGalleryComponent} from "./products-gallery/products-gallery.component";
import {CategoryComponent} from "./category/category.component";
import {ProductComponent} from "./product/product.component";
import {CommonModule} from "@angular/common";
import {SharedModule} from "../../components/shared.module";
import {FormsModule} from "@angular/forms";
import {InputMaskDirective} from "../../directives/input-mask.directive";


@NgModule({
  declarations: [
    ShopComponent,
    ProductsGalleryComponent,
    CategoryComponent,
    ProductComponent
  ],
  exports:[
    ShopComponent,
    ProductsGalleryComponent,
    CategoryComponent,
    ProductComponent,
  ],
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        ShopRoutingModule
    ]
})
export class ShopModule { }
