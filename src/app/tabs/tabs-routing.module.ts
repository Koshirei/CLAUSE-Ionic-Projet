import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path:'characters',
        loadChildren: () => import('../personnages-list/personnages-list.module').then(m => m.PersonnagesListPageModule)
      },
      {
        path:'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path:'edit',
        loadChildren: () => import('../personnages-edit/personnages-edit.module').then(m => m.PersonnagesEditPageModule)
      },
      {
        path:'natif',
        loadChildren: () => import('../natif/natif.module').then(m => m.NatifPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
