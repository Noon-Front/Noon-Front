import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../shared classes and interfaces/form-service.service';
import { OrderService } from '../shared classes and interfaces/order.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  counter:number=0;




  constructor(public _formService:FormServiceService , private _orderService : OrderService) {

  }

  ngOnInit(): void {
    this.counter=this._orderService.counter
    if(performance.navigation.type == 1){
      localStorage.removeItem('access_token');
      localStorage.removeItem('access_admin_token');
    }
  }

  //User Loged Out
  logout() {
    this._formService.doLogout();
  }
}
