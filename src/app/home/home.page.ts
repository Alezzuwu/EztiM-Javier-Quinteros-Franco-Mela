import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( private router : Router, private alertC : AlertController) {}

  ngOnInit() {
    
  }
  async login(form){

    var user= form.value["user"];
    var password = form.value["password"];

    if (user == 'admin' && password == 'admin') {
      this.router.navigate(['/inicio/perfil']);
      localStorage.setItem("datosUsuario", user)
    } else {
      const alert = await this.alertC.create({
        cssClass: 'my-custom-class',
        header: 'Error al iniciar sesion',  
        message: 'Credenciales incorrectas.',
        buttons: ['Intentalo nuevamente']
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
      
    }
  }

}

