import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { producto } from 'src/app/inicio/catalogo/catalogo.model';
import { InicioService } from 'src/app/inicio/inicio.service';

@Component({
  selector: 'app-modificar-a',
  templateUrl: './modificar-a.page.html',
  styleUrls: ['./modificar-a.page.scss'],
})
export class ModificarAPage implements OnInit {

  datos : producto;

  constructor(private activatedRoute : ActivatedRoute, private inicioServicio : InicioService, private router : Router) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe( paraMap => { 

      //vamos a capturar el id que esta en la url
      const valor = paraMap.get('prodID')

      //llamamos al servicio y le pasamos el id
      this.datos = this.inicioServicio.getProductosById(valor)

    } )
  }

}
