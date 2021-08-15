import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared classes and interfaces/product.service';

@Component({
  selector: 'app-mobiles-page',
  templateUrl: './mobiles-page.component.html',
  styleUrls: ['./mobiles-page.component.scss']
})
export class MobilesPageComponent implements OnInit {

  constructor(private _productService : ProductService) { }

  allMobiles:any;
  ngOnInit(): void {
    this._productService.getByCategory("1").subscribe(data =>{this.allMobiles=data ,console.log(data)});

  }

}
