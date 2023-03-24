import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnagesEditPage } from './personnages-edit.page';

const routes: Routes = [
  {
    path: '',
    component: PersonnagesEditPage
  },
  {
    path: 'new',
    loadChildren: () => import('./new-personnage/new-personnage.module').then( m => m.NewPersonnagePageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./edit-by-id/edit-by-id.module').then( m => m.EditByIdPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnagesEditPageRoutingModule {}
