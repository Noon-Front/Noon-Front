import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/shared classes and interfaces/form-service.service';
import { MustMatch } from 'src/app/shared classes and interfaces/mustMatch';
import { User } from 'src/app/shared classes and interfaces/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  appUser = new User();

  constructor(public _formService:FormServiceService, public _formBuilder:FormBuilder, public router:Router) {

  }

  ngOnInit(): void {

  }

  //User Register
  registerUser(){
    this._formService.signUp(this.appUser)
    .subscribe(
      (response) => {
        if (response){
          this.router.navigate(['/login']);
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

