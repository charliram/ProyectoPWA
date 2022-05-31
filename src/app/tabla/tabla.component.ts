import { Component, OnInit } from '@angular/core';
import { Suscriptor } from '../suscriptor';
import { SuscriptorService } from '../suscriptor.service';


@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  suscriptores: Suscriptor[]=[];
  constructor( private suscriptorService: SuscriptorService) { }

  ngOnInit(): void {
    this.suscriptores = this.suscriptorService.getSuscriptores();
    
  }

}
