import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ShopComponent} from './shop.component';
import {ProductsGalleryComponent} from "./products-gallery/products-gallery.component";

const routes: Routes = [
  {
    path: '', component: ShopComponent, children: [
      // { path: '', redirectTo: '/tile/shop/products-gallery/default', pathMatch: 'full' },
      { path: 'products-gallery/:routerLink', component: ProductsGalleryComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
