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
import { ListOfItemsComponent } from './list-of-items/list-of-items.component';
import { List1Component } from './list-of-items/list1/list1.component';
import { List2Component } from './list-of-items/list2/list2.component';
import { List3Component } from './list-of-items/list3/list3.component';
import { List4Component } from './list-of-items/list4/list4.component';
import { List5Component } from './list-of-items/list5/list5.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeCategoryComponent } from './home-category/home-category.component';

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
    ListOfItemsComponent,
    List1Component,
    List2Component,
    List3Component,
    List4Component,
    List5Component,
    HomePageComponent,
    HomeCategoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
