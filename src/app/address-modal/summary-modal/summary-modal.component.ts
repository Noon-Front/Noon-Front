import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../shared classes and interfaces/order.service';

@Component({
  selector: 'app-summary-modal',
  templateUrl: './summary-modal.component.html',
  styleUrls: ['./summary-modal.component.scss']
})
export class SummaryModalComponent implements OnInit {

  constructor(public _orderService : OrderService) { }
  order : any = this._orderService.cart;
  todayDate =  new Date();
  today= String(this.todayDate).slice(0,25);
  delivery =new Date(this.todayDate.getFullYear(),this.todayDate.getMonth(),this.todayDate.getDate()+3)
  deliveryDate = String(this.delivery).slice(0,25);
  ngOnInit(): void {
  }

}