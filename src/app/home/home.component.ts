import { Component, OnInit } from '@angular/core';
import { Suscriptor } from '../suscriptor';
import { SuscriptorService } from '../suscriptor.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  suscriptor: Suscriptor ={
    nombre:'',
      sexo:'',
      correo:'',
      fecha:''
  };

  constructor(private suscriptorService:SuscriptorService) {

   }

  ngOnInit(): void {
    this.suscriptor = this.suscriptorService.nuevoSuscriptor()
    
  }
  registro_user():void{
    this.suscriptorService.agregarSuscriptor(this.suscriptor);
    this.suscriptor = this.suscriptorService.nuevoSuscriptor();
  }
}
