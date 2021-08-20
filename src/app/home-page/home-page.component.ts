import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared classes and interfaces/product.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  selectedItem:any;
  allProduct:any;
  constructor(private router:Router,private _productService:ProductService) { }

  ngOnInit(): void {
    this._productService.getByCategory("2").subscribe(data =>{this.allProduct=data});
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

  getProducts(cateId:string){
    this.router.navigate(['/productList',cateId]);
  }
}
