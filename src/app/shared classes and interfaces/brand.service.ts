import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from './brand';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  baseUrl="https://localhost:44326/api/brand"

  constructor(private http:HttpClient) { }

  getAllBrands():Observable<Brand[]>{
    return this.http.get<Brand[]>(this.baseUrl)
  }

  insertNewBrand(brand :Brand):Observable<Brand>{
    const headers={ 'content-type': 'application/json'}
    const body=JSON.stringify(brand);
    console.log(body)
    return this.http.post(this.baseUrl,body,{'headers':headers})
  }

  removeBrand(id: string):Observable<Brand>{
    return this.http.delete(`${this.baseUrl}?id=${id}`)
  }
  edit(brand:Brand):Observable<Brand>{
    const headers={ 'content-type': 'application/json'}
    const body=JSON.stringify(brand);
    console.log(body)
    return this.http.put(this.baseUrl,body,{'headers':headers})
  }
  getById(id:string):Observable<Brand>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }



}
