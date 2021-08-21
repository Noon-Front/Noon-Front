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
import { CaruselDivComponent } from './mobiles-page/carusel-div/carusel-div.component';
import { PriceDivComponent } from './mobiles-page/price-div/price-div.component';
import { BrandDivComponent } from './mobiles-page/brand-div/brand-div.component';
import { AdsDivComponent } from './mobiles-page/ads-div/ads-div.component';
import { ECaruselDivComponent } from './electronics-page/e-carusel-div/e-carusel-div.component';
import { TvLaptopDivComponent } from './electronics-page/tv-laptop-div/tv-laptop-div.component';
import { AudioVideoCameraDivComponent } from './electronics-page/audio-video-camera-div/audio-video-camera-div.component';
import { FCaruselDivComponent } from './fashion-page/f-carusel-div/f-carusel-div.component';
import { FCategoryDivComponent } from './fashion-page/f-category-div/f-category-div.component';
import { HerDivComponent } from './fashion-page/her-div/her-div.component';
import { HimDivComponent } from './fashion-page/him-div/him-div.component';
import { TopBrandsDivComponent } from './fashion-page/top-brands-div/top-brands-div.component';

import { LoginFormComponent } from './forms/login-form/login-form.component';
import { RegisterFormComponent } from './forms/register-form/register-form.component';
import { LoginAdminComponent } from './forms/login-admin/login-admin.component';
import { RegisterAdminComponent } from './forms/register-admin/register-admin.component';
import { LoginSellerComponent } from './forms/login-seller/login-seller.component';
import { RegisterSellerComponent } from './forms/register-seller/register-seller.component';
import { UploadComponent } from './add-product/upload/upload.component';
import { FacebookLoginProvider, SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { ChechoutModalComponent } from './chechout-modal/chechout-modal.component';//new
import { GoogleMapsModule } from '@angular/google-maps';
import { AddressModalComponent } from './address-modal/address-modal.component';
import { SummaryModalComponent } from './address-modal/summary-modal/summary-modal.component';
import { InputModalComponent } from './address-modal/input-modal/input-modal.component' 

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
    CaruselDivComponent,
    PriceDivComponent,
    BrandDivComponent,
    AdsDivComponent,
    ECaruselDivComponent,
    TvLaptopDivComponent,
    AudioVideoCameraDivComponent,
    FCaruselDivComponent,
    FCategoryDivComponent,
    HerDivComponent,
    HimDivComponent,
    TopBrandsDivComponent,

    LoginFormComponent,
    RegisterFormComponent,
    LoginAdminComponent,
    RegisterAdminComponent,
    LoginSellerComponent,
    RegisterSellerComponent,

    UploadComponent,
      ChechoutModalComponent,
      AddressModalComponent,
      SummaryModalComponent,
      InputModalComponent,
      


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,//new
    SwiperModule,
    HttpClientModule,
    SocialLoginModule,
    GoogleMapsModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,//new
      useClass: AuthInterceptor,//new
      multi: true//new
      
    },
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider(
              '231663375629746'
            )
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
