import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubCategory } from './sub-category';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  baseUrl="https://localhost:44326/api/SubCategory";

  constructor(private http:HttpClient) { }


  addSubCategory(subcategory:SubCategory):Observable<SubCategory> {
    const headers={ 'content-type': 'application/json'}
    const body=JSON.stringify(subcategory);
    console.log(body)
    return this.http.post(this.baseUrl,body,{'headers':headers})


  }

  getAllSubCategory():Observable<SubCategory[]>{
    return this.http.get<SubCategory[]>(this.baseUrl)
  }
  removeSubCategory(id:string):Observable<SubCategory>{
    return this.http.delete(`${this.baseUrl}?id=${id}`)
  }
  edit(subCategory:SubCategory):Observable<SubCategory>{
    const headers={ 'content-type': 'application/json'}
    const body=JSON.stringify(subCategory);
    console.log(body)
    return this.http.put(this.baseUrl,body,{'headers':headers})
  }
  getById(id:string):Observable<SubCategory>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }
}
