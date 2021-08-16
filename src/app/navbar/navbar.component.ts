import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormServiceService } from '../shared classes and interfaces/form-service.service';
import { MustMatch } from '../shared classes and interfaces/mustMatch';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  constructor(public _formService:FormServiceService) {

  }

  ngOnInit(): void {
  }

  logout() {
    this._formService.doLogout();
  }

}
