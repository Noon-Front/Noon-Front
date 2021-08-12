import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  _url:string = "https://localhost:44326/api/Authentication/";


  constructor(private _http:HttpClient) { }

  addUser(user:User):Observable<User>{
    const headers = {"content-type":"application/json"};
    const body = JSON.stringify(user);
    console.log(body);
    return this._http.post(this._url+"register", body, {"headers":headers})
  }

  login(loginUser:User):Observable<User>{
    const headers = {"content-type":"application/json"};
    const body = JSON.stringify(loginUser);
    console.log(body);
    return this._http.post(this._url + "login", body, {"headers":headers})
  }
}
