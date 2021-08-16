import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  cart:Product[] =[];
  constructor() { }

  addToCart(product : Product)
  {
    this.cart.push(product);
    console.log(this.cart);
  }
}
