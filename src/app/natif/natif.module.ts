import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NatifPageRoutingModule } from './natif-routing.module';

import { NatifPage } from './natif.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NatifPageRoutingModule
  ],
  declarations: [NatifPage]
})
export class NatifPageModule {}
