import { Component, OnInit } from '@angular/core';
import { FormServiceService } from '../shared classes and interfaces/form-service.service';
import { User } from '../shared classes and interfaces/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  userModel = new User();

  showLogin = true;
  showRegister = false;
  ForgetPass = false;

  show = true;

  accountStatus = false;

  constructor(private _formService:FormServiceService) {

  }

  ngOnInit(): void {
  }

  showSignUp(){
    this.showRegister = true;
    this.showLogin = false;
    this.ForgetPass = false;
  }
  showSignIn(){
    this.showLogin = true;
    this.showRegister = false;
    this.ForgetPass = false;
  }
  showForgetPass(){
    this.ForgetPass = true;
    this.showLogin = false;
    this.showRegister = false;
  }

  registerUser(){
    this._formService.signUp(this.userModel).subscribe(
      response => console.log("succed:", response),
      error => console.log("error:", error)
    )

    this.showLogin = true;
    this.showRegister = false;
    this.ForgetPass = false;
  }

  loginSubmit(){
    this._formService.signIn(this.userModel);
    this.accountStatus = true;
  }

  logout(){
    this._formService.doLogout();
  }

}
