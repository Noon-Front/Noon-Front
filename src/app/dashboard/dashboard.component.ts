import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
 
  open(item:any):void{
    document.getElementById("customers")?.classList.replace("d-block","d-none")
    document.getElementById("orders")?.classList.replace("d-block","d-none")
    document.getElementById("products")?.classList.replace("d-block","d-none")
    document.getElementById("sellers")?.classList.replace("d-block","d-none")
    document.getElementById("newBrand")?.classList.replace("d-block","d-none")
    document.getElementById("newCategory")?.classList.replace("d-block","d-none")
    document.getElementById("newSubCategory")?.classList.replace("d-block","d-none")
    document.getElementById(item)?.classList.replace("d-none", "d-block")

  }

}
