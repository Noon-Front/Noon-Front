import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared classes and interfaces/product.service';

@Component({
  selector: 'app-fashion-page',
  templateUrl: './fashion-page.component.html',
  styleUrls: ['./fashion-page.component.scss']
})
export class FashionPageComponent implements OnInit {
  selectedItem:any;
  allFashion:any;
  constructor(private _productService : ProductService) { }

  ngOnInit(): void {
    this._productService.getByCategory("3").subscribe(data =>{this.allFashion=data ,console.log(data)});

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


