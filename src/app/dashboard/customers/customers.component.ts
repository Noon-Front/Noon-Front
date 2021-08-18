import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared classes and interfaces/user';
import { UserService } from 'src/app/shared classes and interfaces/user.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  Users!:User[];

  constructor(private userServics:UserService) { }

  ngOnInit(): void {
    this.userServics.getAllUsers().subscribe(data => {this.Users=data})
  }
  delete(id : any ){
    this.userServics.deleteUser(id).subscribe(data =>{console.log(data)})

  }

}
