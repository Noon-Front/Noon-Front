import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  cart: Product[] = [];
  productPrice: any;
  totalPrice: number = 0;
  counter: number = 0;
  location:any;
  mobileNumber:any
  
  constructor() {}

  addToCart(product: Product) {
    this.cart.push(product);
    this.productPrice = product.price;
    this.totalPrice = this.totalPrice + this.productPrice;
    this.counter = this.counter + 1;
    console.log(this.counter);
  }
  removeFromCart(product: Product) {
    this.cart.forEach((value, index) => {
      if (value.id == product.id) {
        this.cart.splice(index, 1);
        this.counter = this.counter - 1;
        this.productPrice = product.price;
    this.totalPrice = this.totalPrice - this.productPrice;
      }
    });

    
    console.log(this.totalPrice);

  }
}
