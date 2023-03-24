import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonnagesListPageRoutingModule } from './personnages-list-routing.module';

import { PersonnagesListPage } from './personnages-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonnagesListPageRoutingModule
  ],
  declarations: [PersonnagesListPage]
})
export class PersonnagesListPageModule {}
