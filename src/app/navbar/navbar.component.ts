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

  constructor(public _formService:FormServiceService, public _formBuilder:FormBuilder) {
    this.signupForm = this._formBuilder.group({
      userName:['', Validators.required],
      email:['', [Validators.required, Validators.pattern(/(?:^|\s)[\w!#$%&'*+/=?^`{|}~-](\.?[\w!#$%&'*+/=?^`{|}~-]+)*@\w+[.-]?\w*\.[a-zA-Z]{2,3}\b/)]],
      password:['', Validators.required],
      confirmPassword:['', Validators.required]
    }, {validator: MustMatch('password', 'confirmPassword')})
  }
  //userModel = new User();

  showLogin = true;
  showRegister = false;
  ForgetPass = false;

  show = true;

  accountStatus = false;

  ngOnInit(): void {
    if(performance.navigation.type == 1){
      localStorage.clear()
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

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }
  onReset() {
    this.submitted = false;
    this.signupForm.reset();
}

  loginUser(){
    this._formService.signIn(this.signupForm.value);
    this.submitted = true;
    this.check();
  }

  logout() {
    this._formService.doLogout();
  }


  check(){
     setTimeout(() => {
      if(localStorage.getItem("access_token")){
        console.log("localStorage full");
        this.accountStatus = true;
        document.querySelector(".info")?.classList.add("d-none");
        document.querySelector(".modal-backdrop")?.classList.remove("modal-backdrop","show");
        document.querySelector(".modal")?.classList.add("d-none");
      } else {
        console.log("localStorage empty");
        this.submitted = false;
        alert("invalid email or password");
      }
     }, 500)
  }
}
