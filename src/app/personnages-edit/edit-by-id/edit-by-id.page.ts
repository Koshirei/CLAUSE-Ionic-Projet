import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { PersonnageService } from 'src/app/service/personnage.service';

@Component({
  selector: 'app-edit-by-id',
  templateUrl: './edit-by-id.page.html',
  styleUrls: ['./edit-by-id.page.scss'],
})
export class EditByIdPage implements OnInit {

  personnage: any = null;
  personnage_name: string = "";

  public raritylist = ["SSR", "SR", "R"];
  public classlist = ["Attaquant", "Défendeur", "Supporteur"];
  public manufacturerlist = ["MISSILIS INDUSTRIES","TETRA LINES","ELYSION","PILGRIM"];
  public weaponlist = ["Lance Roquettes","Fusil d'Assault","Fusil à Pompe", "Mitraillette","Sniper"];


  constructor(
    public personnageService: PersonnageService,
    public route: ActivatedRoute,
    public toastController: ToastController
    ) { }

  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id');
    this.personnageService.getOnePersonnageById(id!).subscribe((personnage: any)=>{
      this.personnage = personnage;
      this.personnage_name = personnage.name
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Successfully updated the character!',
      duration: 5000,
      position: 'middle'
    });

    await toast.present();
  }

  updatedb(){
    this.personnageService.updatePersonnage(this.personnage).subscribe(()=>{
      this.presentToast()
      this.personnage_name = this.personnage.name
    })
  }

}
