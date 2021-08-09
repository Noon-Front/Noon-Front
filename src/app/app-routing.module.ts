import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { ElectronicsPageComponent } from './electronics-page/electronics-page.component';
import { FashionPageComponent } from './fashion-page/fashion-page.component';
import { HomeCategoryComponent } from './home-category/home-category.component';
import { ProductDetailsComponent } from './product-details/product.details-component';

const routes: Routes = [
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'fashion', component: FashionPageComponent },
  { path: 'electronics', component: ElectronicsPageComponent },
  { path: 'homeCategory', component: HomeCategoryComponent },
  {path: 'cart',component: AddToCartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

