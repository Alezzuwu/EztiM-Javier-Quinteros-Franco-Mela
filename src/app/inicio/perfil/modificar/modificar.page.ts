import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InicioService } from '../../inicio.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {

  private productos =[]

  constructor(private inicioServicio : InicioService, private route : Router) { }

  ngOnInit() {
    this.productos = this.inicioServicio.getProductos()
  }

  redireccionar() {
    this.route.navigate(['/inicio/perfil/modificar/modificar-a'])
  }
}
