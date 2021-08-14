import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormServiceService } from '../shared classes and interfaces/form-service.service';
import { MustMatch } from '../shared classes and interfaces/mustMatch';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  signupForm:FormGroup;
  submitted:boolean = false;
  showLogin = true;
  showRegister = false;
  ForgetPass = false;
  show = true;
  accountStatus = false;
  userStatus = true;
  cartShow = true;



  constructor(public _formService:FormServiceService, public _formBuilder:FormBuilder) {
    this.signupForm = this._formBuilder.group({
      userName:['', Validators.required],
      email:['', [Validators.required, Validators.pattern(/(?:^|\s)[\w!#$%&'*+/=?^`{|}~-](\.?[\w!#$%&'*+/=?^`{|}~-]+)*@\w+[.-]?\w*\.[a-zA-Z]{2,3}\b/)]],
      password:['', Validators.required, Validators.pattern(/(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/)],
      confirmPassword:['', Validators.required]
    }, {validator: MustMatch('password', 'confirmPassword')})
  }
  //userModel = new User();

  ngOnInit(): void {
    if(performance.navigation.type == 1){
      localStorage.removeItem('access_token');
      localStorage.removeItem('access_admin_token');
    }
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

  //User Register
  registerUser(){
    this._formService.signUp(this.signupForm.value).subscribe(
      response => console.log("Succed:", response),
      error => {alert("Your user name or email is taken\nPlease return register and change it")},
    )

    this.submitted = true;
    if (this.signupForm.invalid){
      return console.log("invalid");
    }
    console.log("Register Success")
    this.showSignIn()
  }

  //Admin Register
  registerAdmin(){
    this._formService.signUpAdmin(this.signupForm.value).subscribe(
      response => {alert("Email created successfully!")},
      error => {alert("Your user name or email is taken\nPlease return register and change it")},
    )

    this.submitted = true;
    if (this.signupForm.invalid){
      return console.log("invalid");
    }
    console.log("Register Success")
  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }


  //User Loged In
  loginUser(){
    this._formService.signIn(this.signupForm.value);
    this.submitted = true;
    this.checkUser();
  }


  //User Loged In
  loginAdmin(){
    this._formService.signInAdmin(this.signupForm.value);
    this.submitted = true;
    this.checkAdmin(); //Return To Review
  }


  //User Loged Out
  logout() {
    this._formService.doLogout();
  }


  //Check User Token Existing
  checkUser(){
     setTimeout(() => {
      if(localStorage.getItem("access_token")){
        console.log("localStorage full");
        this.accountStatus = true;
        this.userStatus = true;
        this.cartShow = true;
        document.querySelector(".info")?.classList.add("d-none");
        document.querySelector(".modal-backdrop")?.classList.remove("modal-backdrop","show");
        document.getElementById("staticBackdropOne")?.classList.add("d-none");
      } else {
        console.log("localStorage empty");
        this.submitted = false;
        alert("invalid email or password");
      }
     }, 500)
  }

  checkAdmin(){
     setTimeout(() => {
      if(localStorage.getItem("access_admin_token")){
        console.log("access_admin_token full");
        this.accountStatus = true;
        this.userStatus = false;
        this.cartShow = false;
        document.querySelector(".info2")?.classList.add("d-none");
        document.querySelector(".modal-backdrop")?.classList.remove("modal-backdrop","show");
        document.getElementById("staticBackdropTwo")?.classList.add("d-none");
      } else {
        console.log("access_admin_token empty");
        this.submitted = false;
        alert("invalid email or password");
      }
     }, 500)
  }
}
