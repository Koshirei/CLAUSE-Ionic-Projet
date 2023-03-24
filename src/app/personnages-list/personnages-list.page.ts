import { Component, OnInit } from '@angular/core';
import { PersonnageService } from '../service/personnage.service';

@Component({
  selector: 'app-personnages-list',
  templateUrl: './personnages-list.page.html',
  styleUrls: ['./personnages-list.page.scss'],
})
export class PersonnagesListPage implements OnInit {

  personnages:any;

  constructor(
    private personnageService: PersonnageService
  ) { 
  
  }

  ngOnInit() {
    this.personnageService.getAllPersonnages().subscribe((data:any)=>{
      this.personnages = data;
    })
  }

}
