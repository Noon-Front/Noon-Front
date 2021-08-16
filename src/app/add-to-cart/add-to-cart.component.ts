import { Component, OnInit } from '@angular/core';
import { OrderService } from '../shared classes and interfaces/order.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
orders:any;
product:any;
total:number=this._orderService.totalPrice;;
  constructor(public _orderService:OrderService) { }

  ngOnInit(): void {
    this.orders= this._orderService.cart;
    this._orderService.removeFromCart(this.product);
  }

}
