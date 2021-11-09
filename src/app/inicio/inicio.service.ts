import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InicioService {

  private productos: any = []
  
  constructor(private http: HttpClient) { }

  //buscar
  getProductos() {
    //retornamos una lista de productos
    return this.http.get('http://localhost:1337/productos');
  }
  //buscar por id 
  getProductosById(productoid: string) {

    return this.http.get('http://localhost:1337/productos/' + productoid);

  }
  //agregar
  addproducto(tit: string, fecha: string, desarrollador: string, cat: string, precio: number, dolar: number, multijugador: boolean, imgURL: string, com: string[]) {

    var datos = {
      "nombre": tit,
      "fecha_lanzamiento": fecha,
      "desarrollador": desarrollador,
      "categoia": cat,
      "precio": precio,
      "precioDolar": dolar,
      "multi": multijugador,
      "imagenURL": imgURL,
      "comentario": com[0]
    }

    return this.http.post('http://localhost:1337/productos/', datos)

  }
  //eliminar
  deleteProducto(productoid: string) {

    return this.http.delete('http://localhost:1337/productos/' + productoid)

  }

}
