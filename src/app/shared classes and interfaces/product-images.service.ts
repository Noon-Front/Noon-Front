import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductImages } from './product-images';

@Injectable({
  providedIn: 'root'
})
export class ProductImagesService {

  constructor(private http:HttpClient) { }

  baseUrl="https://localhost:44326/api/ProductImages/getById "
  getUrl ="https://localhost:44326/Resources/Images"

  getAllProductImages(id :number):Observable<ProductImages> {
   return this.http.get(this.baseUrl+`/${id}`)
  }
  
  getImageById(id:any):Observable<ProductImages> {
    return this.http.get<ProductImages>(this.baseUrl+`/${id}`)
  }
}
