import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared classes and interfaces/product.service';

@Component({
  selector: 'app-mobiles-page',
  templateUrl: './mobiles-page.component.html',
  styleUrls: ['./mobiles-page.component.scss']
})
export class MobilesPageComponent implements OnInit {

  constructor(public _productService : ProductService , private router:Router) { }
  mobile:any;
  allMobiles:any;
  ngOnInit(): void {
    this._productService.getByCategory("2").subscribe(data =>{this.allMobiles=data ,console.log(data)});
    this._productService.onClick(this.mobile);
  }
}
