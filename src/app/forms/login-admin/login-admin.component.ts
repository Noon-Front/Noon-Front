import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormServiceService } from 'src/app/shared classes and interfaces/form-service.service';
import { User } from 'src/app/shared classes and interfaces/user';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.scss']
})
export class LoginAdminComponent implements OnInit {
  appUser = new User();

  constructor(public _formService:FormServiceService, public _formBuilder:FormBuilder){}

  ngOnInit(): void {

  }

   //Admin Loged In
   loginAdmin(){
    this._formService.signInAdmin(this.appUser);
  }
}
