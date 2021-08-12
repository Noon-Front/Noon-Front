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
  newCategory!:Category;


  ngOnInit(): void {
    this._categoryService.getAllCategories().subscribe(data => {this.allCategory=data, console.log(data)})
  }
  submit(){
    
  }

}
