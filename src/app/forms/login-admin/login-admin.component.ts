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
      password:['', [Validators.required, Validators.pattern("(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$")]],
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
}
