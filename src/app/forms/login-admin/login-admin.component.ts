import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from 'src/app/shared classes and interfaces/form-service.service';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  signupForm: FormGroup;
  submitted:boolean = false;

  constructor(public _formService:FormServiceService, public _formBuilder:FormBuilder)
  {
    this.signupForm = this._formBuilder.group({
      userName:['', Validators.required],
      email:['', [Validators.required, Validators.pattern(/(?:^|\s)[\w!#$%&'*+/=?^`{|}~-](\.?[\w!#$%&'*+/=?^`{|}~-]+)*@\w+[.-]?\w*\.[a-zA-Z]{2,3}\b/)]],
      password:['', Validators.required],
      confirmPassword:['', Validators.required]
    })
  }

  ngOnInit(): void {

  }

   //Admin Loged In
   loginAdmin(){
    this._formService.signInAdmin(this.signupForm.value);
    this.submitted = true;
    // this.checkUser();
  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }


//    //Check User Token Existing
//    checkUser(){
//     setTimeout(() => {
//      if(localStorage.getItem("access_token")){
//        console.log("localStorage full");
//       //  this._navbarItem.accountStatus = false;
//       //  this._navbarItem.userStatus = true;
//       //  this._navbarItem.cartShow = true;
//      } else {
//        console.log("localStorage empty");
//        this.submitted = false;
//        alert("invalid email or password");
//      }
//     }, 500)
//  }

}
