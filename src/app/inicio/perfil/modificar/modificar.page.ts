import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InicioService } from '../../inicio.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {

  private productos: any = []

  constructor(private inicioServicio: InicioService, private route: Router) { }

  ngOnInit() {
    this.inicioServicio.getProductos().subscribe(
      (resp) => { this.productos = resp },
      (err) => { console.log(err) }
    )
  }

  redireccionar() {
    this.route.navigate(['/inicio/perfil/modificar/modificar-a'])
  }
}
