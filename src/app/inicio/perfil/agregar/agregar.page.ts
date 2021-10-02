import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InicioService } from '../../inicio.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  constructor(private inicioServicio : InicioService, private router : Router) { }

  ngOnInit() {
  }

  agregarProducto(nombre, fecha, desarrollador, categoria, precio, precioDolar, multi, imagen, comentario){

    var lista = []
    lista.push(comentario.value)

    this.inicioServicio.addproducto(nombre.value, fecha.value, desarrollador.value, categoria.value, precio.value, precioDolar.value, multi, imagen.value, lista)
    this.router.navigate(['/inicio/catalogo'])
  }
}



