import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable, throwError } from 'rxjs';  //throwError => new
import { catchError, map } from 'rxjs/operators';   //new
import { Router } from '@angular/router';
import { UserModel } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  _url:string = "https://localhost:44326/api/Authentication";
  headers = new HttpHeaders().set('content-type','application/json');
  msg?: string = "";

  authShow = false;
  authMsg = "ahmed";

  accountStatus = true;
  userStatus = false;
  adminOrSeller = true;
  cartShow = true;

  user!: UserModel; //new


  constructor(private _http:HttpClient, public router:Router) {
  }

  //User Sign Up
  signUp(user:User):Observable<User>{
    let api = `${this._url}/register`;
    const body = JSON.stringify(user);
    return this._http.post(api, body, {"headers":this.headers}).pipe(catchError(this.handleError));
  }

  //Admin Sign Up
  signUpAdmin(user:User):Observable<User>{
    let api = `${this._url}/register-admin`;
    const body = JSON.stringify(user);
    return this._http.post(api, body, {"headers":this.headers}).pipe(catchError(this.handleError));
  }
  //Seller Sign Up
  signUpSeller(user:User):Observable<User>{
    let api = `${this._url}/register-seller`;
    const body = JSON.stringify(user);
    return this._http.post(api, body, {"headers":this.headers}).pipe(catchError(this.handleError));
  }

  //User Sign In
  signIn(user:User){
    let api = `${this._url}/login`;
    const body = JSON.stringify(user);

    return this._http.post(api, body, {"headers":this.headers}).subscribe((res:any) => {
      localStorage.setItem("access_token", res.token);
      this.user = this.getUser(res.token);
      this.router.navigate(['/cart']);
      console.log(res);
    })
  }


  private getUser(token:string):UserModel {//new--------------------
    return JSON.parse(atob(token.split('.')[1])) as UserModel;
  }




  //Admin Sign In
  signInAdmin(user:User){
    let api = `${this._url}/login`;
    const body = JSON.stringify(user);

    return this._http.post(api, body, {"headers":this.headers}).subscribe((res:any) => {
      localStorage.setItem("access_admin_token", res.token);
      this.user = this.getUser(res.token);
      this.router.navigate(['/dashboard']);
      console.log(res);
    })
  }




  //Seller Sign In
  signInSeller(user:User){
    let api = `${this._url}/login`;
    const body = JSON.stringify(user);

    return this._http.post(api, body, {"headers":this.headers}).subscribe((res:any) => {
      localStorage.setItem("access_seller_token", res.token);
      this.user = this.getUser(res.token);
      this.router.navigate(['/addProduct']);
      console.log(res);
    })
  }

  //Get User Token
  get getToken():any {
    return localStorage.getItem('access_token');
  }


  //Get Admin Token
  getAdminToken() {
    return localStorage.getItem('access_admin_token');
  }
  //Get Seller Token
  getSellerToken() {
    return localStorage.getItem('access_seller_token');
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

  //Seller Is Loged In
  get isSellerLoggedIn(): boolean {
    let authSellerToken = localStorage.getItem('access_seller_token');
    return (authSellerToken !== null) ? true : false;
  }


  //User and Admin LogOut
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    let removeAdminToken = localStorage.removeItem('access_admin_token');
    let removeSellerToken = localStorage.removeItem('access_seller_token');
    if (removeToken == null || removeAdminToken == null || removeSellerToken == null) {
      this.router.navigate(['/home']);
    }
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.status == 500) {
      // client-side error
      msg = "Email or UserName is exist";
    }
    return throwError(msg);
  }

  showUnauthorizeMsg(){
    this.authShow = true;
    this.authMsg = "Your email is not registered Sign Up first!";
    setTimeout(() => {
      this.authShow = false;
    }, 3000);
  }

}
