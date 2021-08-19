import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  baseUrl="https://localhost:44326/api/Authentication"

  getAllUsers():Observable<User[]>{
    
    return this.http.get<User[]>(this.baseUrl)
  }
  deleteUser(id:any):Observable<User>{
    return this.http.delete<User>(this.baseUrl+`/deleteUser/${id}`)
  }
}
