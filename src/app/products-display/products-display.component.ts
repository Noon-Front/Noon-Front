import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../shared classes and interfaces/order.service';
import { ProductService } from '../shared classes and interfaces/product.service';

@Component({
  selector: 'app-products-display',
  templateUrl: './products-display.component.html',
  styleUrls: ['./products-display.component.scss']
})
export class ProductsDisplayComponent implements OnInit {
  cateId: any;
  productList:any;

  constructor(
    private _productService:ProductService,
    private activatedRoute : ActivatedRoute,private router:Router,
    private _orderService:OrderService
    ) { }

  ngOnInit(): void {
    this.cateId = this.activatedRoute.snapshot.paramMap.get('id');
    this._productService.getByCategory(this.cateId).subscribe(data => {this.productList=data, console.log(data) });
  }

  showDetails(productId:string){
    this.router.navigate(["/product-details",productId])
  }

  addProductToCart(){
    this._orderService.addToCart(this.productList);
  }

}
