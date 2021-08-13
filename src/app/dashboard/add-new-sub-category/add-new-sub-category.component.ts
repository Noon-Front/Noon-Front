import { Component, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/shared classes and interfaces/sub-category';
import { SubCategoryService } from 'src/app/shared classes and interfaces/sub-category.service';

@Component({
  selector: 'app-add-new-sub-category',
  templateUrl: './add-new-sub-category.component.html',
  styleUrls: ['./add-new-sub-category.component.scss']
})
export class AddNewSubCategoryComponent implements OnInit {

  constructor(private _subCategoryService:SubCategoryService) { }
  allSubCategory:any;
  newSubCategory= new SubCategory();
  modifiedObj:any;

  ngOnInit(): void {
    this._subCategoryService.getAllSubCategory().subscribe(data =>{this.allSubCategory=data, console.log(data)})
  }
 
  submit(){
    this._subCategoryService.addSubCategory(this.newSubCategory).subscribe(data => { console.log(data)})
    this.ngOnInit();
  }
  delete(id:any){
    this._subCategoryService.removeSubCategory(id).subscribe(data =>{console.log(data)})
    this.ngOnInit();
  }
  getById(id:any):void{
    this._subCategoryService.getById(id).subscribe(data =>{this.modifiedObj=data, console.log(data)})
 }
 edit(){
   this._subCategoryService.edit(this.modifiedObj).subscribe(data =>{console.log(data)})
   this.ngOnInit(); 

 }

}
