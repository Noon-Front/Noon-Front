import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }
  baseUrl="https://localhost:44326/api/Category"

  getAllCategories():Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl)
  }
  addNewCategory(category:Category):Observable<Category> {
    const headers={ 'content-type': 'application/json'}
    const body=JSON.stringify(category);
    console.log(body)
    return this.http.post(this.baseUrl,body,{'headers':headers})

  }
  removeCategory(id:string):Observable<Category>{
    return this.http.delete(`${this.baseUrl}?id=${id}`)
  }

  edit(category:Category):Observable<Category>{
    const headers={ 'content-type': 'application/json'}
    const body=JSON.stringify(category);
    console.log(body)
    return this.http.put(this.baseUrl,body,{'headers':headers})
  }
  getById(id:string):Observable<Category>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
  
}
