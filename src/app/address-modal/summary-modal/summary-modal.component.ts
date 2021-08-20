import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../shared classes and interfaces/order.service';

@Component({
  selector: 'app-summary-modal',
  templateUrl: './summary-modal.component.html',
  styleUrls: ['./summary-modal.component.scss']
})
export class SummaryModalComponent implements OnInit {

  constructor(private _orderService : OrderService) { }
  totalPrice = this._orderService.totalPrice;
  ngOnInit(): void {
  }

}
