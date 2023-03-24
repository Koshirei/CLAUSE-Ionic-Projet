import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditByIdPageRoutingModule } from './edit-by-id-routing.module';

import { EditByIdPage } from './edit-by-id.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditByIdPageRoutingModule
  ],
  declarations: [EditByIdPage]
})
export class EditByIdPageModule {}
