import { Component, OnInit } from '@angular/core';
import { Product } from '../shared classes and interfaces/product';
import { ProductImages } from '../shared classes and interfaces/product-images';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
product= new Product();
productImage= new ProductImages();
imageUrl1:string="assets/Images/add-image.png"
imageUrl2:string="assets/Images/add-image.png"
imageUrl3:string="assets/Images/add-image.png"
imagePath:any;
  imageToUpload!: File;
  constructor() { }

  ngOnInit(): void {
    console.log(this.productImage.imagePath)
    console.log(this.imagePath)
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
  

}
