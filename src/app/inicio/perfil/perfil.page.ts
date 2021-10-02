import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private alertCtrl: AlertController, private router : Router) {

    
  }
//boton para confirmar accion de cerrar sesion
  async presentConfirm() {
   let alert = await this.alertCtrl.create({
     header: 'Estas a punto de cerrar sesion',
     message: 'Quieres cerrar sesion?',
     buttons: [
       {
         text: 'Cancelar',
         role: 'cancel',
         handler: () => {
           console.log('Cancel clicked');
         }
       },
       {
         text: 'Confirmar',
         handler: () => {
           this.router.navigate(['/home']);
         }
       }
     ]
   });
   await alert.present();
 }

  ngOnInit() {
  }

}
