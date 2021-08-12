import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ElectronicsPageComponent } from './electronics-page/electronics-page.component';
import { FashionPageComponent } from './fashion-page/fashion-page.component';
import { HomeCategoryComponent } from './home-category/home-category.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MobilesPageComponent } from './mobiles-page/mobiles-page.component';
import { ProductDetailsComponent } from './product-details/product.details-component';
import { SupermarketPageComponent } from './supermarket-page/supermarket-page.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomePageComponent},
  { path: 'product-details', component: ProductDetailsComponent },
  { path: 'fashion', component: FashionPageComponent },
  { path: 'electronics', component: ElectronicsPageComponent },
  { path: 'homeCategory', component: HomeCategoryComponent },
  {path: 'cart',component: AddToCartComponent},
  {path:'mobiles', component:MobilesPageComponent},
  {path:'supermarket',component:SupermarketPageComponent},
  {path:'dashboard' , component:DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

