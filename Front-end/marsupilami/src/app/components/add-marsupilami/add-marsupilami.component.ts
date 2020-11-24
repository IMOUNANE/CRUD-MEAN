import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
//import { NavbarComponent } from '../navbar/navbar.component';
import { MarsupilamiService } from 'src/app/services/marsupilami.service';



@Component({
  selector: 'app-add-marsupilami',
  templateUrl: './add-marsupilami.component.html',
  styleUrls: ['./add-marsupilami.component.css']
})
export class AddMarsupilamiComponent implements OnInit {
  marsupilami = {
    nom: '',
    age: '',
    famille: '',
    race:'',
    nourriture:'',
    
  };
  submitted = false;

  constructor(private marsupilamiService: MarsupilamiService, private auth: AuthService, private router:Router) { }

  ngOnInit() {
  }
  registerUser(event: any){
    event.preventDefault()
    const error=[]
    const target = event.target
    const username = target.querySelector("#username").value
    const password = target.querySelector("#password").value
    const cpassword = target.querySelector("#cpassword").value
    this.newMarsupilami()
    this.saveMarsupilami()
    if(password!=cpassword){
      error.push("Password do not match")
    }
    if(error.length > 0){
      this.auth.registerUser(username,password).subscribe(data=>{
        console.log(data)
        if(data.success){
          this.router.navigate(['dashbord'])
          
        }
      })
        
    }
    console.log(username, password)
  }
  

  saveMarsupilami() {
    const data = {
      nom: this.marsupilami.nom,
      age: this.marsupilami.age,
      famille: this.marsupilami.famille,
      race: this.marsupilami.race,
      nourriture: this.marsupilami.nourriture,
    };

    this.marsupilamiService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newMarsupilami() {
    this.submitted = false;
    this.marsupilami = {
      nom: '',
      age: '',
      famille: '',
      race:'',
      nourriture:'',
    };
  }
}