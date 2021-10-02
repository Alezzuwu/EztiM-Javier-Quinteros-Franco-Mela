import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { producto } from '../../catalogo/catalogo.model';
import { InicioService } from '../../inicio.service';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.page.html',
  styleUrls: ['./eliminar.page.scss'],
})
export class EliminarPage implements OnInit {

  private productos =[]
  datos : producto;

  constructor( private inicioservicio : InicioService, private route : Router) { }

  ngOnInit() {
    this.productos = this.inicioservicio.getProductos();
  }

  eliminar(){
    console.log("eliminado")
    this.inicioservicio.deleteProducto(this.datos.id)
    //redireccionar a la pagina de productos
    this.route.navigate(['/inicio/perfil/eliminar']);

  }

}
