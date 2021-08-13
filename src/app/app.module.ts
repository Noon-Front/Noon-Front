import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailsComponent } from './product-details/product.details-component';
import { CarouselComponent } from './home-page/carousel/carousel.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { FashionPageComponent } from './fashion-page/fashion-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  //new => ReactiveFormsModule
import { HomePageComponent } from './home-page/home-page.component';
import { ElectronicsPageComponent } from './electronics-page/electronics-page.component';
import { SwiperModule } from 'swiper/angular';
import { MobilesPageComponent } from './mobiles-page/mobiles-page.component';
import { SupermarketPageComponent } from './supermarket-page/supermarket-page.component';
import { HomeCategoryComponent } from './home-category/home-category.component';
import { ProductsDisplayComponent } from './products-display/products-display.component';
import { AddProductComponent } from './add-product/add-product.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';  //new => HTTP_INTERCEPTORS
import { AuthInterceptor } from './shared classes and interfaces/authconfig.interceptor'; //new
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddNewBrandComponent } from './dashboard/add-new-brand/add-new-brand.component';
import { AddNewCategoryComponent } from './dashboard/add-new-category/add-new-category.component';
import { AddNewSubCategoryComponent } from './dashboard/add-new-sub-category/add-new-sub-category.component';
import { CustomersComponent } from './dashboard/customers/customers.component';
import { OrdersComponent } from './dashboard/orders/orders.component';
import { ProductsComponent } from './dashboard/products/products.component';
import { SellersComponent } from './dashboard/sellers/sellers.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Navbar2Component,
    FooterComponent,
    ProductDetailsComponent,
    CarouselComponent,
    AddToCartComponent,
    FashionPageComponent,
    HomePageComponent,
    ElectronicsPageComponent,
    MobilesPageComponent,
    SupermarketPageComponent,
    HomeCategoryComponent,

    ProductsDisplayComponent,

    AddProductComponent,
    DashboardComponent,
    AddNewBrandComponent,
    AddNewCategoryComponent,
    AddNewSubCategoryComponent,
    CustomersComponent,
    OrdersComponent,
    ProductsComponent,
    SellersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,//new
    SwiperModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,//new
      useClass: AuthInterceptor,//new
      multi: true//new
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
