import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared classes and interfaces/product.service';

@Component({
  selector: 'app-home-category',
  templateUrl: './home-category.component.html',
  styleUrls: ['./home-category.component.scss']
})
export class HomeCategoryComponent implements OnInit {
  selectedItem:any;
  productList:any;
  pro:any;
  constructor(public _productService:ProductService) { }

  ngOnInit(): void {
    this._productService.getByCategory("4").subscribe(data => {this.productList=data, console.log(data)});
    this._productService.onClick(this.pro);
  }

addToWish(item:any){
  this.selectedItem=item.classList
    if(this.selectedItem=="bi bi-suit-heart"){
    this.selectedItem.remove("bi-suit-heart")
      this.selectedItem.add("text-danger")
      this.selectedItem.add("bi-suit-heart-fill")
    }else{
      this.selectedItem.add("bi-suit-heart")
      this.selectedItem.remove("bi-suit-heart-fill")
      this.selectedItem.remove("text-danger")

    }
  }

}
