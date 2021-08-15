import { Component, OnInit } from '@angular/core';
import { ProductService } from '../shared classes and interfaces/product.service';

@Component({
  selector: 'app-electronics-page',
  templateUrl: './electronics-page.component.html',
  styleUrls: ['./electronics-page.component.scss']
})
export class ElectronicsPageComponent implements OnInit {

  constructor(private _productService : ProductService) { }
  allElectronics:any;
  ngOnInit(): void {
    this._productService.getByCategory("1").subscribe(data => {this.allElectronics = data,console.log(data)});
  }

}
