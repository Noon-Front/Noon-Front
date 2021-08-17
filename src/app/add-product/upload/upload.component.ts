import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { BrandService } from 'src/app/shared classes and interfaces/brand.service';
import { Category } from 'src/app/shared classes and interfaces/category';
import { CategoryService } from 'src/app/shared classes and interfaces/category.service';
import { Product } from 'src/app/shared classes and interfaces/product';
import { ProductImages } from 'src/app/shared classes and interfaces/product-images';
import { ProductService } from 'src/app/shared classes and interfaces/product.service';
import { SubCategoryService } from 'src/app/shared classes and interfaces/sub-category.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  constructor(private http:HttpClient, private _productService:ProductService ,private _brandService:BrandService, private _categoryService:CategoryService, private _subCategoryService:SubCategoryService) { }

  public progress: number | undefined;
public message: string | undefined;
@Output() public onUploadFinished = new EventEmitter();
product= new Product();
category = new Category();
productImage= new ProductImages();
imageUrl1:string="assets/Images/add-image.png"
imageUrl2:string="assets/Images/add-image.png"
imageUrl3:string="assets/Images/add-image.png"
imagePath:any;
imageToUpload!: File;
categories:any;
subCategories:any;
brands:any;

  ngOnInit(): void {
    this._brandService.getAllBrands().subscribe(data =>{ this.brands= data, console.log(data)})
    this._subCategoryService.getAllSubCategory().subscribe(data => {this.subCategories=data, console.log(data)})
    this._categoryService.getAllCategories().subscribe(data => {this.categories=data, console.log(data)})
  }
  public uploadFile = (files:any) => {
   
    if (files.length === 0) {
      return;
    }
    let fileToUpload = <File>files[0];
    const formData = new FormData();
    formData.append('file', fileToUpload, fileToUpload.name);
    this.http.post('https://localhost:44326/api/ProductImages', formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded );
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
          this.onUploadFinished.emit(event.body);
        }
      });
  }
  addProduct(){
    this._productService.addProduct(this.product).subscribe(data =>{console.log(data)});
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
