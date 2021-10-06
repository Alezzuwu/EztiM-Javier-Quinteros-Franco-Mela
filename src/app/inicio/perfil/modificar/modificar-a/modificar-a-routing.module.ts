import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarAPage } from './modificar-a.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarAPageRoutingModule {}
