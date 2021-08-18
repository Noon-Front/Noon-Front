import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/shared classes and interfaces/form-service.service';
import { User } from 'src/app/shared classes and interfaces/user';

@Component({
  selector: 'app-register-admin',
  templateUrl: './register-admin.component.html',
  styleUrls: ['./register-admin.component.scss']
})
export class RegisterAdminComponent implements OnInit {
  appUser = new User();

  constructor(public _formService:FormServiceService, public _formBuilder:FormBuilder, public router:Router) {}

  ngOnInit(): void {

  }

  //User Register
  registerAdmin(){
    this._formService.signUpAdmin(this.appUser)
    .subscribe(
      (response) => {
        if (response){
          this.showMessage("Admin created successfully!");
        }
      },
      (error) => {
        if (error){
          this.showMessage("The user name already exists!");
        }
      },
    )
  }

  showMessage(msg:string){
    this._formService.authShow = true;
    this._formService.authMsg = msg;
    setTimeout(() => {
      this._formService.authShow = false;
    }, 3000)
  }

}
