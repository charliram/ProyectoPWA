import { Injectable } from '@angular/core';
import { Suscriptor } from './suscriptor';

@Injectable({
  providedIn: 'root'
})
export class SuscriptorService {
  private suscriptores: Suscriptor[] = [];
  constructor() {
    this.suscriptores=JSON.parse( localStorage.getItem("data") || '[]' );
  }
  getSuscriptores(){
    return this.suscriptores;
  }
  agregarSuscriptor(suscriptor:Suscriptor):void{
    this.suscriptores.push(suscriptor);
    localStorage.setItem('data',JSON.stringify(this.suscriptores));
  }
  nuevoSuscriptor(): Suscriptor {
    return {
      nombre:'',
      sexo:'',
      correo:'',
      fecha:''
    }
  }
}
