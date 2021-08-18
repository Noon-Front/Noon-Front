import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SocialAuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { FormServiceService } from 'src/app/shared classes and interfaces/form-service.service';
import { User } from 'src/app/shared classes and interfaces/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  appUser = new User();
  // socialUser: SocialUser;

  constructor(public _formService:FormServiceService, public _formBuilder:FormBuilder, private socialAuthService: SocialAuthService){}

  ngOnInit(): void {

  }

   //User Loged In
   loginUser(){
    this._formService.signIn(this.appUser);
  }

  //FaceBook---------------------------
  loginWithFacebook(): void {
    this.socialAuthService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

}
