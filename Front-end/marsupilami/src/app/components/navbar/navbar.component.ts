import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  marsupilami ='test'
  constructor() { }

  ngOnInit(): void {
      this.session( this.marsupilami);
  }

  session(marsupilami:any){
    console.log(marsupilami)
  }
  

}
