import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModificarAPageRoutingModule } from './modificar-a-routing.module';

import { ModificarAPage } from './modificar-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModificarAPageRoutingModule
  ],
  declarations: [ModificarAPage]
})
export class ModificarAPageModule {}
