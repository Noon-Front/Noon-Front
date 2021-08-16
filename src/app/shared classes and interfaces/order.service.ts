import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  cart: Product[] = [];
  totalPrice: number = 0;
  constructor() {}

  addToCart(product: Product) {
    this.cart.push(product);
    console.log(this.cart);
  }
  removeFromCart(product: Product) {
    this.cart.forEach((value, index) => {
      if (value.id == product.id) this.cart.splice(index, 1);
    });
  }
}
