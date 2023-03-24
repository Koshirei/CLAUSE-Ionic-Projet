import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewPersonnagePage } from './new-personnage.page';

const routes: Routes = [
  {
    path: '',
    component: NewPersonnagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewPersonnagePageRoutingModule {}
