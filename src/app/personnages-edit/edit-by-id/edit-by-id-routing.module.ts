import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditByIdPage } from './edit-by-id.page';

const routes: Routes = [
  {
    path: '',
    component: EditByIdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditByIdPageRoutingModule {}
