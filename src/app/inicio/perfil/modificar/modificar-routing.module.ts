import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModificarPage } from './modificar.page';

const routes: Routes = [
  {
    path: '',
    component: ModificarPage
  },
  {
    path: 'modificar-a',
    loadChildren: () => import('./modificar-a/modificar-a.module').then( m => m.ModificarAPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModificarPageRoutingModule {}
