import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnePersonnagePageRoutingModule } from './one-personnage-routing.module';

import { OnePersonnagePage } from './one-personnage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnePersonnagePageRoutingModule
  ],
  declarations: [OnePersonnagePage]
})
export class OnePersonnagePageModule {}
