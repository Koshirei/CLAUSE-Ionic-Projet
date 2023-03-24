import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnePersonnagePage } from './one-personnage.page';

const routes: Routes = [
  {
    path: '',
    component: OnePersonnagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnePersonnagePageRoutingModule {}
