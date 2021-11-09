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

  producto: any = [];

  constructor(private inicioservicio: InicioService, private route: Router) { }

  ngOnInit() {
    this.inicioservicio.getProductos().subscribe(
      (resp) => { this.producto = resp },
      (err) => { console.log(err) }
    )
  }

  eliminar(idd: string) {
    this.inicioservicio.deleteProducto(this.producto.id).subscribe(
      (resp) => {
        this.producto = resp
        this.route.navigate(['/inicio/perfil/']);
      },
      (err) => { console.log(err) }
    )
    console.log("eliminado")
    //redireccionar a la pagina de productos
    this.route.navigate(['/inicio/perfil/']);

  }

}
