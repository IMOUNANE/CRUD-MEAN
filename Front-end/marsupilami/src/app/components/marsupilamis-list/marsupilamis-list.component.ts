import { Component, OnInit } from '@angular/core';
import { MarsupilamiService } from 'src/app/services/marsupilami.service';

@Component({
  selector: 'app-marsupilamis-list',
  templateUrl: './marsupilamis-list.component.html',
  styleUrls: ['./marsupilamis-list.component.css']
})
export class MarsupilamisListComponent implements OnInit {

  marsupilamis: any;
  currentMarsupilami = null;
  currentIndex = -1;
  nom = '';

  constructor(private marsupilamiService: MarsupilamiService) { }

  ngOnInit() {
    this.retrieveMarsupilamis();
  }

  retrieveMarsupilamis() {
    this.marsupilamiService.getAll()
      .subscribe(
        data => {
          this.marsupilamis = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList() {
    this.retrieveMarsupilamis();
    this.currentMarsupilami = null;
    this.currentIndex = -1;
  }

  setActiveMarsupilami(marsupilami:any, index:number) {
    this.currentMarsupilami = marsupilami;
    this.currentIndex = index;
  }

  removeAllMarsupilamis() {
    this.marsupilamiService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveMarsupilamis();
        },
        error => {
          console.log(error);
        });
  }

  searchNom() {
    this.marsupilamiService.findByNom(this.nom)
      .subscribe(
        data => {
          this.marsupilamis = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
