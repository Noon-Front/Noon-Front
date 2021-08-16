import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/shared classes and interfaces/form-service.service';
import { MustMatch } from 'src/app/shared classes and interfaces/mustMatch';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  signupForm:FormGroup;
  submitted:boolean = false;

  showMsg:boolean = false;


  constructor(public _formService:FormServiceService, public _formBuilder:FormBuilder, public router:Router) {
    this.signupForm = this._formBuilder.group({
      userName:['', Validators.required],
      email:['', [Validators.required, Validators.pattern(/(?:^|\s)[\w!#$%&'*+/=?^`{|}~-](\.?[\w!#$%&'*+/=?^`{|}~-]+)*@\w+[.-]?\w*\.[a-zA-Z]{2,3}\b/)]],
      password:['', [Validators.required, Validators.pattern("(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$")]],
      confirmPassword:['', Validators.required]
    }, {validator: MustMatch('password', 'confirmPassword')})
  }

  ngOnInit(): void {

  }

  //User Register
  registerUser(){
    this._formService.signUp(this.signupForm.value)
    .subscribe(
      (response) => {
        if (response){
          this.submitted = false;
          this.router.navigate(['/login']);
        }
      },
      (error) => {
        if (error){
          this.showMsgError();
        }
      },
    )

    if (this.signupForm.invalid){
      this.submitted = true;
      return console.log("invalid");
    }
    return console.log("Register Success")
  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  showMsgError(){
    this.showMsg = true;
    setTimeout(() => {
      this.showMsg = false;
    }, 3000)
  }
}

