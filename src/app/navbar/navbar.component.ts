import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit(): void {
  }

  showSignUp(){
    this.showLogin = false;
    this.showRegister = true;
    this.ForgetPass = false;
  }
  showSignIn(){
    this.showLogin = true;
    this.showRegister = false;
    this.ForgetPass = false;
  }
  showForgetPass(){
    this.showLogin = false;
    this.showRegister = false;
    this.ForgetPass = true;
  }
}
