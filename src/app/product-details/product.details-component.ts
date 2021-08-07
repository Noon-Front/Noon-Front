import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
mainImg:any;
img1:any;
img2:any;
img3:any;
autoSelected:any;
blue:string="border-color:blue;"
gray:string="border-color:gray;"

clickedImage:any;
  constructor() { }

  ngOnInit(): void {
    this.mainImg= document.getElementById("mainImg") as HTMLImageElement;
    this.img1= document.getElementById("img1") as HTMLImageElement;
    this.img2= document.getElementById("img2") as HTMLImageElement;
    this.img3= document.getElementById("img3") as HTMLImageElement;
    this.autoSelected=`${this.blue}`
  }

  setImg(img: string): void {
   this. clickedImage= document.getElementById(img) as HTMLImageElement;
    this.mainImg.src=`${this.clickedImage.src}`;
    this.img3.style=`${this.gray}`
    this.img2.style=`${this.gray}`
    this.img1.style=`${this.gray}`
    this.clickedImage.style=`${this.blue}`
  }

}
