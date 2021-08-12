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
  
}
