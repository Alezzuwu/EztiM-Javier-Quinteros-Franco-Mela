import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    children:[
      {
        path:"",
        loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path:":prodID",
        loadChildren: () => import('./inicio/catalogo/detalle/detalle.module').then( m => m.DetallePageModule)
      },
      {
        path:":prodID",
        loadChildren: () => import('./inicio/perfil/eliminar/eliminar.module').then( m => m.EliminarPageModule)
      },
      {
        path:":prodID",
        loadChildren: () => import('./inicio/perfil/modificar/modificar-a/modificar-a.module').then( m => m.ModificarAPageModule)
      }
    ]
    
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
