import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { FashionPageComponent } from './fashion-page/fashion-page.component';
import { HomeCategoryComponent } from './home-category/home-category.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailsComponent } from './product-details/product.details-component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home", component:HomePageComponent},
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'fashion', component: FashionPageComponent },
  {path: 'cart',component: AddToCartComponent},
  {path:'homeCategory', component:HomeCategoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

