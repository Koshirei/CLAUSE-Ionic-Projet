import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NatifPage } from './natif.page';

const routes: Routes = [
  {
    path: '',
    component: NatifPage
  },
  {
    path: 'photos',
    loadChildren: () => import('./photos/photos.module').then( m => m.PhotosPageModule)
  },
  {
    path: 'geolocalisation',
    loadChildren: () => import('./geolocalisation/geolocalisation.module').then( m => m.GeolocalisationPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NatifPageRoutingModule {}
