import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { producto } from '../catalogo.model';
import { InicioService } from '../../inicio.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  producto: any = [];

  constructor(private alertCtrl: AlertController, private activateRoute : ActivatedRoute, private inicioservicio : InicioService, private route : Router) { }

  ngOnInit() {

    this.activateRoute.paramMap.subscribe( paraMap => { 

      //vamos a capturar el id que esta en la url
      const valor = paraMap.get('prodID')

      //llamamos al servicio y le pasamos el id
      this.inicioservicio.getProductosById(valor).subscribe(
        (resp : any) => { this.producto = resp },
        (err) => { console.log(err) }
      )

    } )
  }
  

  async presentConfirm() {
    let alert = await this.alertCtrl.create({
      header: 'Estas a punto de eliminar ' + this.producto.nombre,
      message: 'Quieres eliminarlo?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.inicioservicio.deleteProducto(this.producto.id).subscribe(
              (resp : any) => { this.producto = resp
                this.route.navigate(['/inicio/catalogo'])
              },
              (err) => { console.log(err) }
            );
          }
        }
      ]
    });
    await alert.present();
  }

}
