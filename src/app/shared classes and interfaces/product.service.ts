import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl:string="https://localhost:44326/api/product";

  constructor(private http:HttpClient) { }


  addProduct(newProduct:Product):Observable<Product>{
    const headers={ 'content-type': 'application/json'}
    const body=JSON.stringify(newProduct);
    console.log(body)
    return this.http.post(this.baseUrl,body,{'headers':headers})
  }

  getByCategory(catId:string):Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/Category/${catId}`)
    }

}
