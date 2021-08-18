import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/shared classes and interfaces/form-service.service';
import { User } from 'src/app/shared classes and interfaces/user';

@Component({
  selector: 'app-register-seller',
  templateUrl: './register-seller.component.html',
  styleUrls: ['./register-seller.component.scss']
})
export class RegisterSellerComponent implements OnInit {
  appUser = new User();

  constructor(public _formService:FormServiceService, public _formBuilder:FormBuilder, public router:Router) {
  }

  ngOnInit(): void {

  }

  //Seller Register
  registerSeller(){
    this._formService.signUpSeller(this.appUser)
    .subscribe(
      (response) => {
        if (response){
          this.router.navigate(['/sellerLogin']);
        }
      },
      (error) => {
        if (error){
          this.showMsgError();
        }
      },
    )
  }

  showMsgError(){
    this._formService.authShow = true;
    this._formService.authMsg = "The user name already exists!";
    setTimeout(() => {
      this._formService.authShow = false;
    }, 3000)
  }
}
