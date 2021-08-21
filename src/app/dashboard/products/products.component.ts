import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared classes and interfaces/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private _productService:ProductService) { }
  products:any;

  ngOnInit(): void {
    this._productService.getAllProducts().subscribe(data =>{this.products=data})
  }

  delete(id:number){
    this._productService.deleteProduct(id).subscribe(data =>{console.log(data)})
  }

}
