import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { FashionPageComponent } from './fashion-page/fashion-page.component';
import { ProductDetailsComponent } from './product-details/product.details-component';

const routes: Routes = [
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'fashion', component: FashionPageComponent },
  {path: 'cart',component: AddToCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

