import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonnagesListPage } from './personnages-list.page';

const routes: Routes = [
  {
    path: '',
    component: PersonnagesListPage
  },
  {
    path: ':id',
    loadChildren: () => import('./one-personnage/one-personnage.module').then( m => m.OnePersonnagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PersonnagesListPageRoutingModule {}
