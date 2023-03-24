import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewPersonnagePageRoutingModule } from './new-personnage-routing.module';

import { NewPersonnagePage } from './new-personnage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewPersonnagePageRoutingModule
  ],
  declarations: [NewPersonnagePage]
})
export class NewPersonnagePageModule {}
