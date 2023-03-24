import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonnageService } from 'src/app/service/personnage.service';

@Component({
  selector: 'app-one-personnage',
  templateUrl: './one-personnage.page.html',
  styleUrls: ['./one-personnage.page.scss'],
})
export class OnePersonnagePage implements OnInit {

  personnage: any = null;

  constructor(
    public personnageService: PersonnageService,
    public route: ActivatedRoute
    ) { }

  ngOnInit(){

    const id = this.route.snapshot.paramMap.get('id');
    this.personnageService.getOnePersonnageById(id!).subscribe((personnage: any)=>{
      this.personnage = personnage;
    })

  }

}
