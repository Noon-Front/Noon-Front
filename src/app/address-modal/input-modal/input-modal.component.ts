import { Component, OnInit } from '@angular/core';
import { OrderService } from './../../shared classes and interfaces/order.service';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.scss']
})
export class InputModalComponent implements OnInit {

  constructor( private _orderService : OrderService) { }
  ngOnInit(): void {
  }
getLocation(location : any , mobile:any)
{
  console.log(location)
  this._orderService.location = location;
  this._orderService.mobileNumber = mobile;
}
}
