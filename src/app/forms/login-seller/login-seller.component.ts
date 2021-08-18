import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormServiceService } from 'src/app/shared classes and interfaces/form-service.service';
import { User } from 'src/app/shared classes and interfaces/user';

@Component({
  selector: 'app-login-seller',
  templateUrl: './login-seller.component.html',
  styleUrls: ['./login-seller.component.scss']
})
export class LoginSellerComponent implements OnInit {
  appUser = new User();

  constructor(public _formService:FormServiceService, public _formBuilder:FormBuilder){}

  ngOnInit(): void {

  }

   //Seller Loged In
   loginSeller(){
    this._formService.signInSeller(this.appUser);
  }
}
