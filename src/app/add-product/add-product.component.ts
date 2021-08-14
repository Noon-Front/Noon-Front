import { Component, OnInit } from '@angular/core';
import { BrandService } from '../shared classes and interfaces/brand.service';
import { Category } from '../shared classes and interfaces/category';
import { CategoryService } from '../shared classes and interfaces/category.service';
import { Product } from '../shared classes and interfaces/product';
import { ProductImages } from '../shared classes and interfaces/product-images';
import { ProductService } from '../shared classes and interfaces/product.service';
import { SubCategoryService } from '../shared classes and interfaces/sub-category.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
product= new Product();
category = new Category();
productImage= new ProductImages();
imageUrl1:string="assets/Images/add-image.png"
imageUrl2:string="assets/Images/add-image.png"
imageUrl3:string="assets/Images/add-image.png"
imagePath:any;
imageToUpload!: File;
  constructor( private _productService:ProductService ,private _brandService:BrandService, private _categoryService:CategoryService, private _subCategoryService:SubCategoryService) { }
categories:any;
subCategories:any;
brands:any;


  ngOnInit(): void {
    this._brandService.getAllBrands().subscribe(data =>{ this.brands= data, console.log(data)})
    this._subCategoryService.getAllSubCategory().subscribe(data => {this.subCategories=data, console.log(data)})
    this._categoryService.getAllCategories().subscribe(data => {this.categories=data, console.log(data)})
  }
 
 
  handelUpload1(file:any):void{
    this.imageToUpload= file.target.files[0]
    //show the images
    var reader = new FileReader();
    reader.onload= (event:any) => {
      this.imageUrl1= event.target.result;
    }
    reader.readAsDataURL(this.imageToUpload);
  }
  handelUpload2(file:any):void{
    this.imageToUpload= file.target.files[0]
    //show the images
    var reader = new FileReader();
    reader.onload= (event:any) => {
      this.imageUrl2= event.target.result;
    }
    reader.readAsDataURL(this.imageToUpload);
  }
  handelUpload3(file:any):void{
    this.imageToUpload= file.target.files[0]
    //show the images
    var reader = new FileReader();
    reader.onload= (event:any) => {
      this.imageUrl3= event.target.result;
    }
    reader.readAsDataURL(this.imageToUpload);
  }
  getCategory(id:string){
    this._categoryService.getById(id).subscribe(data => {this.category=data, console.log(data)})
  }
  
submit(){
  console.log(this.product)
  this._productService.addProduct(this.product).subscribe(data => {console.log(data)})
}
}
