import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnagesEditPageRoutingModule } from './personnages-edit-routing.module';

import { PersonnagesEditPage } from './personnages-edit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonnagesEditPageRoutingModule
  ],
  declarations: [PersonnagesEditPage]
})
export class PersonnagesEditPageModule {}
