import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Product } from '../shared classes and interfaces/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  product = new Product();

  constructor() { }

   public response:any;
   uploadFinished = (event:any) => {
    this.response = event;
  }
 


  ngOnInit(): void {

  }
   
   

    
 
  
 
 
 
}
