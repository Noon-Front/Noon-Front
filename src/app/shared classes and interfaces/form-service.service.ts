import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable, throwError } from 'rxjs';  //throwError => new
import { catchError, map } from 'rxjs/operators';   //new
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  _url:string = "https://localhost:44326/api/Authentication";
  headers = new HttpHeaders().set('content-type','application/json');
  msg?: string = "now";


  constructor(private _http:HttpClient, public router:Router) { }

  //User Sign Up
  signUp(user:User):Observable<User>{
    let api = `${this._url}/register`;
    const body = JSON.stringify(user);
    //console.log(body);
    return this._http.post(api, body, {"headers":this.headers}).pipe(catchError(this.handleError));
  }

  //Admin Sign Up
  signUpAdmin(user:User):Observable<User>{
    let api = `${this._url}/register-admin`;
    const body = JSON.stringify(user);
    //console.log(body);
    return this._http.post(api, body, {"headers":this.headers}).pipe(catchError(this.handleError));
  }

  //User Sign In
  signIn(user:User){
    let api = `${this._url}/login`;
    const body = JSON.stringify(user);
    //console.log(body);
    return this._http.post(api, body, {"headers":this.headers}).subscribe((res:any) => {
      localStorage.setItem("access_token", res.token);
      //this.router.navigate(['/home']);
      console.log(res);
    })
  }
  //Admin Sign In
  signInAdmin(user:User){
    let api = `${this._url}/login`;
    const body = JSON.stringify(user);
    //console.log(body);
    return this._http.post(api, body, {"headers":this.headers}).subscribe((res:any) => {
      localStorage.setItem("access_admin_token", res.token);
      //this.router.navigate(['/home']);
      console.log(res);
    })
  }
  //Get User Token
  getToken() {
    return localStorage.getItem('access_token');
  }
  //Get Admin Token
  getAdminToken() {
    return localStorage.getItem('access_admin_token');
  }
  //User Is Loged In
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }
  //Admin Is Loged In
  get isAdminLoggedIn(): boolean {
    let authAdminToken = localStorage.getItem('access_admin_token');
    return (authAdminToken !== null) ? true : false;
  }
  //User and Admin LogOut
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    let removeAdminToken = localStorage.removeItem('access_admin_token');
    if (removeToken == null || removeAdminToken == null) {
      this.router.navigate(['/home']);
    }
  }


  // Error
  // handleError() {
  //   return throwError("Email or UserName is exist");
  // }

  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.status == 500) {
      // client-side error
      msg = "Email or UserName is exist";
    }
    return throwError(msg);
  }
}
