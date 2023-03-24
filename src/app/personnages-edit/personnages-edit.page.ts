import { Component, OnInit } from '@angular/core';
import { PersonnageService } from '../service/personnage.service';

@Component({
  selector: 'app-personnages-edit',
  templateUrl: './personnages-edit.page.html',
  styleUrls: ['./personnages-edit.page.scss'],
})
export class PersonnagesEditPage implements OnInit {

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

  deleteCharacterById(id:string){
    this.personnageService.deletePersonnageById(id)
  }

}
