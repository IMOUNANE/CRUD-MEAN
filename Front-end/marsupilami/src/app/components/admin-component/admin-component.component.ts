import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import {AuthGuard} from '../../services/auth.guard';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.css']
})

export class AdminComponent implements OnInit {

  message = "Loading...."

  constructor(private user: UserService) { }

  ngOnInit() {
    this.user.getSomeData().subscribe(data => {
      this.message = data.message
    })
  }

}