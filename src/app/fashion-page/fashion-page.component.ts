import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fashion-page',
  templateUrl: './fashion-page.component.html',
  styleUrls: ['./fashion-page.component.scss']
})
export class FashionPageComponent implements OnInit {
  selectedItem:any;
  constructor() { }

  ngOnInit(): void {
    
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

