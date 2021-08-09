import { Component, OnInit, ɵgetDebugNode__POST_R3__ } from '@angular/core';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.scss']
})
export class Navbar2Component implements OnInit {

  show = false;

  constructor() { }

  ngOnInit(): void {
  }

  showList(){
    if (this.show == false){
      this.show = true;
    }
  }

  hideList(){
    if (this.show == true){
      this.show = false;
    }
  }

}
