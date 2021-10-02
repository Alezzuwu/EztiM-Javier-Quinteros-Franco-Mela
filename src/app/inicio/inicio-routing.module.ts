import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    children: [
      {
        path: 'perfil',
        children: [
          {
            path: '',
            loadChildren: () => import('../inicio/perfil/perfil.module').then(m => m.PerfilPageModule)
          }
        ]
      },
      {
        path: 'catalogo',
        children: [
          {
            path: '',
            loadChildren: () => import('../inicio/catalogo/catalogo.module').then(m => m.CatalogoPageModule)
          },
          {
            path: 'detalle',
            loadChildren: () => import('./catalogo/detalle/detalle.module').then( m => m.DetallePageModule)
          },
        ]
      },
      
    ]
  }, 

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
