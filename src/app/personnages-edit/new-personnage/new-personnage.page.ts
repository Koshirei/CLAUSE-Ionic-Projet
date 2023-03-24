import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Personnage } from 'src/app/models/personnage.model';
import { PersonnageService } from 'src/app/service/personnage.service';

@Component({
  selector: 'app-new-personnage',
  templateUrl: './new-personnage.page.html',
  styleUrls: ['./new-personnage.page.scss'],
})
export class NewPersonnagePage implements OnInit {

  public personnage! : Personnage; 

  public raritylist = ["SSR", "SR", "R"];
  public classlist = ["Attaquant", "Défendeur", "Supporteur"];
  public manufacturerlist = ["MISSILIS INDUSTRIES","TETRA LINES","ELYSION","PILGRIM"];
  public weaponlist = ["Lance Roquettes","Fusil d'Assault","Fusil à Pompe", "Mitraillette","Sniper"];

  constructor(
    private PersonnageService: PersonnageService,
    private toastController: ToastController
  ) { 
    
  }

  ngOnInit() {
    this.personnage = new Personnage();
  }

  //on affiche un message de succès pendant 5 secondes
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Successfully added the character!',
      duration: 5000,
      position: 'middle'
    });

    await toast.present();
  }


  add2db(){
    this.PersonnageService.addPersonnage(this.personnage).subscribe(()=>{
      this.personnage = new Personnage();
      this.presentToast();
    })
  }


}
