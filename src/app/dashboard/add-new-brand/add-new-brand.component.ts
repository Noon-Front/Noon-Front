import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/shared classes and interfaces/brand';
import { BrandService } from 'src/app/shared classes and interfaces/brand.service';

@Component({
  selector: 'app-add-new-brand',
  templateUrl: './add-new-brand.component.html',
  styleUrls: ['./add-new-brand.component.scss']
})
export class AddNewBrandComponent implements OnInit {

  constructor(private _brandService:BrandService) { }
  newBrand!:Brand;
  allBrands:any;

  ngOnInit(): void {
    this._brandService.getAllBrands().subscribe(data =>{this.allBrands=data , console.log(data)})
  }
  submit(){
    this._brandService.insertNewBrand(this.newBrand)
  }

}
