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


  constructor(private _http:HttpClient, public router:Router) { }

  signUp(user:User):Observable<User>{
    let api = `${this._url}/register`;
    const body = JSON.stringify(user);
    //console.log(body);
    return this._http.post(api, body, {"headers":this.headers}).pipe(catchError(this.handleError));
  }

  signIn(user:User){
    let api = `${this._url}/login`;
    const body = JSON.stringify(user);
    //console.log(body);
    return this._http.post(api, body, {"headers":this.headers}).subscribe((res:any) => {
      localStorage.setItem("access_token", res.token);
      //this.router.navigate(['/cart']);
      console.log(res);
    })
  }

  getToken() {
    return localStorage.getItem('access_token');
  }

  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }

  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['/home']);
    }
  }


  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
