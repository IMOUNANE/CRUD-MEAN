import { Component, OnInit } from '@angular/core';
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

  constructor(private marsupilamiService: MarsupilamiService) { }

  ngOnInit() {
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