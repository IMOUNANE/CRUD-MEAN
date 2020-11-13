import { Component, OnInit } from '@angular/core';
import { MarsupilamiService} from 'src/app/services/marsupilami.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-connection-marsupilami',
  templateUrl: './connection-marsupilami.component.html',
  styleUrls: ['./connection-marsupilami.component.css']
})
export class ConnectionMarsupilamiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  checkMarsupilami(){
    
  }

  inscriptionMarsupilami(){
    this.router.navigate(['/add'])
  }

  
}
