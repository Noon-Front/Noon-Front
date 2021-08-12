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
  newSubCategory!:SubCategory;

  ngOnInit(): void {
    this._subCategoryService.getAllSubCategory().subscribe(data =>{this.allSubCategory=data, console.log(data)})

  }
  submit(){
    this._subCategoryService.addSubCategory(this.newSubCategory).subscribe(data => { console.log(data)})
  }

}
