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
import { AuthGuard } from './shared classes and interfaces/auth.guard'; //new
import { AuthAdminGuard } from './shared classes and interfaces/auth-admin.guard';
import { AddProductComponent } from './add-product/add-product.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { RegisterFormComponent } from './forms/register-form/register-form.component';
import { LoginAdminComponent } from './forms/login-admin/login-admin.component';
import { RegisterAdminComponent } from './forms/register-admin/register-admin.component';

const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"home", component:HomePageComponent},
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'fashion', component: FashionPageComponent },
  { path: 'electronics', component: ElectronicsPageComponent },
  { path: 'homeCategory', component: HomeCategoryComponent },
  {path: 'cart',component: AddToCartComponent},//AuthGuard new
  {path:'mobiles', component:MobilesPageComponent},
  {path:'supermarket',component:SupermarketPageComponent},
  {path:'dashboard' , component:DashboardComponent, canActivate:[AuthAdminGuard]},
  {path: "addProduct", component:AddProductComponent, canActivate:[AuthAdminGuard]},
  {path:"login", component:LoginFormComponent},
  {path:"adminLogin", component:LoginAdminComponent},
  {path:"register", component:RegisterFormComponent},
  {path:"adminRegister", component:RegisterAdminComponent, canActivate:[AuthAdminGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

