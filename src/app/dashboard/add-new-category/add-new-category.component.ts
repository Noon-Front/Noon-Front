import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/shared classes and interfaces/category';
import { CategoryService } from 'src/app/shared classes and interfaces/category.service';

@Component({
  selector: 'app-add-new-category',
  templateUrl: './add-new-category.component.html',
  styleUrls: ['./add-new-category.component.scss']
})
export class AddNewCategoryComponent implements OnInit {

  constructor(private _categoryService:CategoryService) { }
  allCategory:any;
  newCategory= new Category();
  modifiedObj:any;


  ngOnInit(): void {
    this._categoryService.getAllCategories().subscribe(data => {this.allCategory=data, console.log(data)})
  }
  submit(){
    this._categoryService.addNewCategory(this.newCategory).subscribe(data =>{console.log(data)})
    this.ngOnInit();    
  }
  delete(id:any){
    this._categoryService.removeCategory(id).subscribe(data =>{console.log(data)})
    this.ngOnInit(); 
  }
  getById(id:any):void{
     this._categoryService.getById(id).subscribe(data =>{this.modifiedObj=data, console.log(data)})
  }
  edit(){
    this._categoryService.edit(this.modifiedObj).subscribe(data =>{console.log(data)})
    this.ngOnInit(); 

  }

}
